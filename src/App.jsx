import { useState, useEffect } from 'react'
import './App.css'
import { TEAMS_DATABASE } from './teams.js'

// Lista de nombres para autocompletar
const TEAM_NAMES = TEAMS_DATABASE.map(t => t.name)

// Obtener equipo del día (basado en fecha)
function getTodaysTeam() {
  const today = new Date().toDateString()
  const index = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % TEAMS_DATABASE.length
  return TEAMS_DATABASE[index]
}

// Obtener equipo aleatorio
function getRandomTeam() {
  const index = Math.floor(Math.random() * TEAMS_DATABASE.length)
  return TEAMS_DATABASE[index]
}

const HINTS_CONFIG = [
  { key: 'country', icon: '🌍', label: 'País' },
  { key: 'colors', icon: '🎨', label: 'Colores' },
  { key: 'founded', icon: '📅', label: 'Año de fundación' },
  { key: 'leagues', icon: '🏆', label: 'Ligas ganadas' },
  { key: 'lastTitle', icon: '⭐', label: 'Último título' },
  { key: 'coach', icon: '👔', label: 'Entrenador' }
]

function App() {
  const [gameMode, setGameMode] = useState('daily') // 'daily' | 'infinite'
  const [secretTeam, setSecretTeam] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [attempts, setAttempts] = useState([])
  const [gameStatus, setGameStatus] = useState('playing')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [message, setMessage] = useState(null)
  const [showResult, setShowResult] = useState(false)
  
  // Estadísticas modo infinito
  const [infiniteStats, setInfiniteStats] = useState({
    played: 0,
    won: 0,
    currentStreak: 0,
    maxStreak: 0
  })

  useEffect(() => {
    if (gameMode === 'daily') {
      setSecretTeam(getTodaysTeam())
    } else {
      setSecretTeam(getRandomTeam())
    }
  }, [gameMode])

  const filteredTeams = inputValue.length > 0
    ? TEAM_NAMES.filter(t => t.toLowerCase().includes(inputValue.toLowerCase()))
    : []

  const revealedHintsCount = Math.min(attempts.length, HINTS_CONFIG.length)

  const handleSubmit = () => {
    if (!inputValue.trim() || gameStatus !== 'playing') return

    const guess = inputValue.trim()
    const isCorrect = guess.toLowerCase() === secretTeam.name.toLowerCase()

    setAttempts([...attempts, { team: guess, correct: isCorrect }])
    setInputValue('')
    setShowSuggestions(false)

    if (isCorrect) {
      setGameStatus('won')
      setShowResult(true)
      showMessage('✅ ¡Correcto!', 'success')
      
      // Actualizar estadísticas modo infinito
      if (gameMode === 'infinite') {
        setInfiniteStats(prev => ({
          ...prev,
          won: prev.won + 1,
          played: prev.played + 1,
          currentStreak: prev.currentStreak + 1,
          maxStreak: Math.max(prev.maxStreak, prev.currentStreak + 1)
        }))
      }
    } else {
      if (attempts.length + 1 >= 6) {
        setGameStatus('lost')
        setShowResult(true)
        showMessage('❌ Game Over', 'error')
        
        // Actualizar estadísticas modo infinito
        if (gameMode === 'infinite') {
          setInfiniteStats(prev => ({
            ...prev,
            played: prev.played + 1,
            currentStreak: 0
          }))
        }
      } else {
        showMessage('❌ Incorrecto - Nueva pista desbloqueada', 'error')
      }
    }
  }

  const showMessage = (text, type) => {
    setMessage({ text, type })
    setTimeout(() => setMessage(null), 2500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSubmit()
  }

  const selectTeam = (team) => {
    setInputValue(team)
    setShowSuggestions(false)
  }

  const shareResult = () => {
    const modeText = gameMode === 'daily' ? 'Modo Diario' : 'Modo Infinito'
    const status = gameStatus === 'won' ? `¡Acertado en ${attempts.length} intentos!` : 'No acertado 😢'
    const text = `FUTBOL-LE ⚽ ${modeText}\n\n${status}\n🎯 ${secretTeam?.name}\n\nfutbolle.app`
    navigator.clipboard.writeText(text)
    showMessage('¡Copiado al portapapeles!', 'success')
  }

  const resetGame = () => {
    setAttempts([])
    setGameStatus('playing')
    setShowResult(false)
    setInputValue('')
    
    if (gameMode === 'infinite') {
      // En modo infinito, nuevo equipo aleatorio
      let newTeam = getRandomTeam()
      while (newTeam.name === secretTeam?.name) {
        newTeam = getRandomTeam()
      }
      setSecretTeam(newTeam)
    } else {
      // En modo daily, mismo equipo del día
      setSecretTeam(getTodaysTeam())
    }
  }

  const toggleGameMode = () => {
    const newMode = gameMode === 'daily' ? 'infinite' : 'daily'
    setGameMode(newMode)
    resetGame()
  }

  if (!secretTeam) return <div className="loading">Cargando...</div>

  return (
    <div className="container">
      <header className="header">
        <h1>⚽ FUTBOL-LE</h1>
        <p>Adivina el equipo secreto</p>
      </header>

      {/* Selector de modo */}
      <div className="game-mode-selector">
        <button 
          className={`mode-btn ${gameMode === 'daily' ? 'active' : ''}`}
          onClick={() => gameMode !== 'daily' && toggleGameMode()}
        >
          📅 Diario
        </button>
        <button 
          className={`mode-btn ${gameMode === 'infinite' ? 'active' : ''}`}
          onClick={() => gameMode !== 'infinite' && toggleGameMode()}
        >
          ♾️ Infinito
        </button>
      </div>

      <div className="game-info">
        {gameMode === 'daily' ? (
          <>
            <div className="day">Día #{new Date().getDate() + 50}</div>
            <div className="category">🌍 Un equipo al día</div>
          </>
        ) : (
          <>
            <div className="day">Modo Infinito</div>
            <div className="category">
              🔥 Racha: {infiniteStats.currentStreak} | ✅ Ganados: {infiniteStats.won}/{infiniteStats.played}
            </div>
          </>
        )}
      </div>

      {/* Input */}
      <div className="input-section">
        <div className="suggestions-wrapper">
          <div className="input-wrapper">
            <input
              type="text"
              className="team-input"
              placeholder="Escribe un equipo..."
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value)
                setShowSuggestions(true)
              }}
              onKeyPress={handleKeyPress}
              disabled={gameStatus !== 'playing'}
            />
            <button 
              className="submit-btn" 
              onClick={handleSubmit}
              disabled={gameStatus !== 'playing'}
            >
              →
            </button>
          </div>
          
          {showSuggestions && filteredTeams.length > 0 && (
            <div className="suggestions-list">
              {filteredTeams.map(team => (
                <div 
                  key={team} 
                  className="suggestion-item"
                  onClick={() => selectTeam(team)}
                >
                  {team}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Intentos */}
      {attempts.length > 0 && (
        <div className="attempts-section">
          <div className="attempts-title">
            Intentos ({attempts.length}/6)
          </div>
          <div className="attempt-list">
            {attempts.map((attempt, index) => (
              <div 
                key={index} 
                className={`attempt-item ${attempt.correct ? 'correct' : ''}`}
              >
                <span className="attempt-number">{index + 1}</span>
                <span className="attempt-team">{attempt.team}</span>
                <span className="attempt-status">{attempt.correct ? '✅' : '❌'}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pistas */}
      <div className="hints-section">
        <div className="hints-title">🔍 Pistas desbloqueadas</div>
        <div className="hint-list">
          {HINTS_CONFIG.map((hint, index) => {
            const isRevealed = index < revealedHintsCount
            const value = secretTeam[hint.key]
            
            return (
              <div 
                key={hint.key} 
                className={`hint-item ${isRevealed ? 'revealed' : 'locked'}`}
              >
                <span className="hint-icon">{hint.icon}</span>
                <div className="hint-content">
                  <div className="hint-label">{hint.label}</div>
                  <div className={`hint-value ${!isRevealed ? 'hidden' : ''}`}>
                    {isRevealed ? value : '???'}
                  </div>
                </div>
                {!isRevealed && <span className="hint-lock">🔒</span>}
              </div>
            )
          })}
        </div>
      </div>

      {/* Mensaje */}
      {message && (
        <div className={`message ${message.type} show`}>
          {message.text}
        </div>
      )}

      {/* Modal resultado */}
      {showResult && (
        <div className="modal-overlay" onClick={() => setShowResult(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-emoji">{gameStatus === 'won' ? '🏆' : '😢'}</div>
            <div className="modal-title">
              {gameStatus === 'won' ? '¡ACERTADO!' : 'GAME OVER'}
            </div>
            <div className="modal-team">{secretTeam.name}</div>
            <div className="modal-stats">
              {gameStatus === 'won' 
                ? `${attempts.length} intentos • Nivel: ${attempts.length <= 3 ? 'Crack' : attempts.length <= 4 ? 'Titular' : 'Suplente'}`
                : 'El equipo era:'
              }
            </div>
            {gameMode === 'infinite' && (
              <div className="infinite-stats">
                🔥 Racha actual: {infiniteStats.currentStreak}
                <br/>
                📊 Total: {infiniteStats.won}/{infiniteStats.played} ganados
              </div>
            )}
            <button className="share-btn" onClick={shareResult}>
              📤 Compartir resultado
            </button>
            <button className="play-again-btn" onClick={resetGame}>
              {gameMode === 'infinite' ? 'Siguiente equipo →' : 'Jugar de nuevo'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
