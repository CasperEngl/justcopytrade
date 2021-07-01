import { useForm } from 'react-hook-form'

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
  } = useForm<Form>()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="container grid gap-16 my-32 lg:grid-cols-2">
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
              className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100"
              type="submit"
            >
              Send message
            </button>
          </div>
        </form>
      </article>
      <article className="prose">
        <h2>Contact information</h2>
        <p>
          For support or questions, please email{' '}
          <a href="mailto:info@justcopytrade.com">info@justcopytrade.com</a>
        </p>
      </article>
    </div>
  )
}

export default ContactUs
