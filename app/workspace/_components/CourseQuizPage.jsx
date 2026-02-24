"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function CourseQuizPage() {
  const { courseId } = useParams();
  const [quizData, setQuizData] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!courseId) return;
    const fetchQuiz = async () => {
      try {
        const res = await fetch(`/api/get-quiz?courseId=${courseId}`);
        const data = await res.json();
        console.log("Fetched quiz data:", data);

        if (data?.success && Array.isArray(data.questions)) {
          setQuizData(data.questions);
        } else {
          setQuizData([]);
        }
      } catch (err) {
        console.error("Error fetching quiz:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuiz();
  }, [courseId]);

  const handleSelect = (index, option) => {
    setAnswers((prev) => ({ ...prev, [index]: option }));
  };

  const handleSubmit = () => {
    let correct = 0;
    quizData.forEach((q, i) => {
      const correctAnswer = q.correctAnswer || q.answer; // ✅ fallback
      if (answers[i] === correctAnswer) correct++;
    });
    setScore(correct);
    setSubmitted(true);
  };

  if (loading) return <div className="p-8 text-center">Loading quiz...</div>;

  if (!quizData.length)
    return <div className="p-8 text-center text-gray-500">No quiz found for this course 😕</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">🧠 Course Quiz</h1>

      {!submitted ? (
        <div className="space-y-8">
          {quizData.map((q, i) => (
            <div key={i} className="p-4 border rounded-xl">
              <h2 className="text-lg font-semibold mb-3">
                {i + 1}. {q.question}
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {q.options?.map((opt, j) => (
                  <button
                    key={j}
                    onClick={() => handleSelect(i, opt)}
                    className={`p-3 border rounded-lg transition-all ${
                      answers[i] === opt
                        ? "bg-purple-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <button
            onClick={handleSubmit}
            className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg"
          >
            Submit Quiz
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">
            🎉 You scored {score} / {quizData.length}
          </h2>
          <button
            onClick={() => (window.location.href = "/workspace")}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg"
          >
            Go to Dashboard
          </button>
        </div>
      )}
    </div>
  );
}
