import { useState } from 'react';
import { BlogPosts } from 'app/components/posts';

// Helper function to reverse a number
function reverseNumber(num) {
  return parseInt(num.toString().split('').reverse().join(''), 10);
}

// 196 Algorithm to find lyrchel_number
function lyrchelNumber(num) {
  let iterations = 0;
  while (iterations < 1000) { // Limit the iterations
    const reversed = reverseNumber(num);
    num += reversed;
    if (num.toString() === reverseNumber(num).toString()) {
      return { palindrome: num, steps: iterations };
    }
    iterations++;
  }
  return { palindrome: null, steps: iterations }; // No palindrome found within the limit
}

export default function Page() {
  const [lyrchelResult, setLyrchelResult] = useState(null);

  const handleLyrchelCalculation = () => {
    const result = lyrchelNumber(196); // Use 196 as an example
    setLyrchelResult(result);
  };

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      <button onClick={handleLyrchelCalculation} className="my-4 px-4 py-2 bg-blue-500 text-white">
        Calculate Lyrchel Number Using 196 Algorithm
      </button>
      {lyrchelResult && (
        <div className="mt-4">
          {lyrchelResult.palindrome ? (
            <p>{`Palindrome found withing 1000 iterations: ${lyrchelResult.palindrome} in ${lyrchelResult.steps} steps.`}</p>
          ) : (
            <p>{`No palindrome found within 1000 iterations.`}</p>
          )}
        </div>
      )}
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
