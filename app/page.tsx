import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Sonia Appasamy
      </h1>
      <p className="mb-4">
        I'm a full stack engineer, currently making networking easier at{' '}
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
      <p className="mb-4">
        Previously, I was at{' '}
        <a
          className="underline underline-offset-4"
          href="https://palantir.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Palantir
        </a>
        , and before that was a student at{' '}
        <a
          className="underline underline-offset-4"
          href="https://cornell.edu/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Cornell University
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
