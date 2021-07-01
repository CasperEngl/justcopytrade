import { useState, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'

interface Form {
  name: string
  email: string
  message: string
}

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<Form>()
  const [response, setResponse] = useState('')
  const [responseLoading, setResponseLoading] = useState(false)
  const [responseError, setResponseError] = useState('')

  const name = watch('name')
  const email = watch('email')
  const message = watch('message')

  // Reset response when entering inputs
  useEffect(() => {
    if (name || email || message) {
      setResponse('')
      setResponseError('')
    }
  }, [name, email, message, reset])

  const onSubmit: SubmitHandler<Form> = async (data) => {
    setResponseLoading(true)

    try {
      const response = await axios.post('/api/contact-us', data)

      setResponse(response.data)
      setResponseError('')

      reset()
    } catch (e) {
      console.log(e.message)
      setResponseError('Error! Message not sent.')
      setResponse('')
    } finally {
      setResponseLoading(false)
    }
  }

  return (
    <div className="container grid gap-16 px-8 my-32 lg:grid-cols-2">
      <article className="prose">
        <h1>Send us a message</h1>
        <p>
          Send us a message and we will get back to you as soon as possible. For
          expedited service, please call{' '}
          <a href="tel:+4510102020">+45 1010 2020</a>
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="max-w-lg space-y-4">
            <label htmlFor="name" className="block space-y-1">
              <div className="text-gray-500">Name</div>
              <input
                type="text"
                id="name"
                {...register('name', {
                  required: 'Name is required.',
                })}
                className="w-full border-gray-300 rounded"
              />
              {errors.name ? (
                <div className="text-sm font-semibold text-red-500">
                  {errors.name.message}
                </div>
              ) : null}
            </label>
            <label htmlFor="email" className="block space-y-1">
              <div className="text-gray-500">Email</div>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: 'Email is required.',
                  pattern: {
                    value: /\S+@\S+\.\S{2,}/,
                    message: 'Entered value does not match email format.',
                  },
                })}
                className="w-full border-gray-300 rounded"
              />
              {errors.email ? (
                <div className="text-sm font-semibold text-red-500">
                  {errors.email.message}
                </div>
              ) : null}
            </label>
            <label htmlFor="message" className="block space-y-1">
              <div className="text-gray-500">Message</div>
              <textarea
                id="message"
                {...register('message', {
                  required: 'Message is required.',
                  minLength: {
                    value: 20,
                    message: 'Message has to be more than 20 characters long.',
                  },
                })}
                className="w-full border-gray-300 rounded"
              />
              {errors.message ? (
                <div className="text-sm font-semibold text-red-500">
                  {errors.message.message}
                </div>
              ) : null}
            </label>
            <button
              className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white"
              type="submit"
              disabled={responseLoading}
            >
              Send message
            </button>
            {response ? (
              <div className="text-jct-600">{response}</div>
            ) : responseError ? (
              <div className="text-red-500">{responseError}</div>
            ) : null}
          </div>
        </form>
      </article>
      <article className="prose">
        <h2>Contact information</h2>
        <p>
          For support or questions, please email{' '}
          <a href="mailto:info@justcopytrade.com">info@justcopytrade.com</a>
        </p>
        <div className="space-y-2">
          <h3 style={{ marginBottom: '0' }}>JustCopyTrade</h3>
          <div className="space-y-1">
            <p style={{ margin: '0' }}>Spenty ApS</p>
            <p>Kronprinsessgade 46E </p>
            <p>1306 København K</p>
            <p>CVR: 41691468</p>
          </div>
        </div>
      </article>
    </div>
  )
}

export default ContactUs
