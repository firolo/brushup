// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get('/entries/en/test', () => {
    console.log('Captured a "GET /posts" request')
    return HttpResponse.json([{"word":"test","phonetic":"/test/"}])
  })
]