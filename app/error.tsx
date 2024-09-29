'use client';

import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Error = ({ statusCode }: { statusCode: number }) => {
  const router = useRouter()

  useEffect(() => {
    if (statusCode === 404) {
      setTimeout(() => {
        router.push('/')
      }, 5000)
    }
  }, [statusCode, router])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </h1>
      <p className="text-xl mb-8">
        {statusCode === 404
          ? "We couldn't find the page you're looking for. Redirecting to homepage in 5 seconds..."
          : 'We apologize for the inconvenience. Please try again later.'}
      </p>
      <button
        onClick={() => router.push('/')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go back to homepage
      </button>
    </div>
  )
}

Error.getInitialProps = ({ res, err }: { res: any; err: any }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error