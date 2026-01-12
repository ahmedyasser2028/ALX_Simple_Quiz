function checkAnswer() {
    // تحديد الإجابة الصحيحة
    const correctAnswer = "4";

    // الحصول على إجابة المستخدم
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedOption ? selectedOption.value : "";

    // تحديد العنصر المسؤول عن الفيدباك
    const feedback = document.getElementById("feedback");

    // التحقق من الإجابة وعرض الفيدباك
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// إضافة event listener لزر الإرسال
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
