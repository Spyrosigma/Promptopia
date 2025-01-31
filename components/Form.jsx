import Link from 'next/link';

const form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>

      <h1 className='head_text text-left'>
        <span className='blue_gradient'> {type} Post </span>
      </h1>

      <p className='desc text-left max-w-md'>
        {type} and share amazing prompts with the world in just a few clicks.
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-full flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-grey-700'>
            Your AI prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            className='form_textarea'
            placeholder='Write your prompt here...'
            required
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-grey-700'>
            Tag {` `}
            <span className='font-normal'>
              (#product, #idea, #machineLearning, #zeroshot )
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder='#tag'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-grey-500 text-sm'>
            Cancel
          </Link>

          <button
              type='submit'
              disabled={submitting}
              className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
              {submitting ? `${type.slice(0,-1)}ing...` : type}  {/* Added Dyanmic Slicing ! */} 
          </button>

        </div>
      </form>

    </section>
  )
}

export default form