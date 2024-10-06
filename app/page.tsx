import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Lychrel Number
      </h1>
      <p className="mb-4">
        {`A Lychrel number is a natural number that cannot form a palindrome through 
        the iterative process of repeatedly reversing its digits and adding the resulting numbers. 
        This process is sometimes called the 196-algorithm, 
        after the most famous number associated with the process.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
