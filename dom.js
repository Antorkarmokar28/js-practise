document.getElementById("comment-btn").addEventListener("click", function () {
  const commentBox = document.getElementById("comment-box");
  const newComment = commentBox.value;
  const container = document.getElementById("wrapper");
  const p = document.createElement("p");
  p.innerText = newComment;
  p.classList.add("p-style");
  container.appendChild(p);
});
