import Link from 'next/link'
import React from 'react'

export default function NewsList({news}) {
  return (
       <ul className="news-list">
        {news.map(newsitem=>(
          <li key={newsitem.id}>
            <Link href={`/news/${newsitem.slug}`}>
             <img src={`/images/news/${newsitem.image
             }`} alt={newsitem.title}/>
             <span>{newsitem.title}</span>
            </Link>
          </li>
        ))}
        </ul>

  )
}
