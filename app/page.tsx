import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi, I'm Sonia 👋
      </h1>
      <p className="mb-4">
        I'm a full stack engineer, currently making secure networking easier at{' '}
        <a
          className="underline underline-offset-4"
          href="https://tailscale.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Tailscale
        </a>
        .
      </p>
      {/* Not currently using blogs. */}
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
