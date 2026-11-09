import { useEffect, useState } from 'react'
import './Card.css'

function Card() {
  const [data, setData] = useState({ title: 'Загрузка...', text: '' })

  useEffect(() => {
    fetch('/api/card')
      .then((res) => res.json())
      .then(setData)
      .catch(() => setData({ title: 'Ошибка', text: 'Сервер не запущен' }))
  }, [])

  return (
    <div className="card">
      <h2>{data.title}</h2>
      <p>{data.text}</p>
      <button>Подробнее</button>
    </div>
  )
}

export default Card
