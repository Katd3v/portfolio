import React, { useEffect, useState } from "react";

const TypewriterTitle = ({
  title,
  cls,
  words,
  typingSpeed,
  deletingSpeed,
  delayBeforeDelete,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const word = words[wordIndex % words.length];
  useEffect(() => {
    const text = isDeleting
      ? word.substring(0, displayedText.length - 1)
      : word.substring(0, displayedText.length + 1);

    const typingAndDeletingSpeed = isDeleting ? deletingSpeed : typingSpeed; // Vitesse de frappe et d'effacement

    const timeout = setTimeout(() => {
      setDisplayedText(text);

      if (!isDeleting && text === word) {
        setTimeout(() => {
          setIsDeleting(true);
        }, delayBeforeDelete);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex(wordIndex + 1);
      }

      if ((isDeleting && text === "") || (!isDeleting && text === word)) {
        clearTimeout(timeout); // Arrête la récursion
      }
    }, typingAndDeletingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, word, wordIndex]);

  const displayedTitle = (ttl) => {
    switch (ttl) {
      case "h1":
        return (
          <h1 className={cls}>
            {displayedText}
            <span className="animate-blink">|</span>
          </h1>
        );
      case "h2":
        return (
          <h2 className={cls}>
            {displayedText}
            <span className="animate-blink">|</span>
          </h2>
        );
      case "h3":
        return (
          <h3 className={cls}>
            {displayedText}
            <span className="animate-blink">|</span>
          </h3>
        );
      case "h4":
        return (
          <h4 className={cls}>
            {displayedText}
            <span className="animate-blink">|</span>
          </h4>
        );
      case "h5":
        return (
          <h5 className={cls}>
            {displayedText}
            <span className="animate-blink">|</span>
          </h5>
        );
      case "h6":
        return (
          <h6 className={cls}>
            {displayedText}
            <span className="animate-blink">|</span>
          </h6>
        );
      case "p":
        return (
          <p className={cls}>
            {displayedText}
            <span className="animate-blink">|</span>
          </p>
        );
      case "span":
        return (
          <span className={cls}>
            {displayedText}
            <span className="animate-blink">|</span>
          </span>
        );
      default:
        return (
          <h1 className={cls}>
            {displayedText}
            <span className="animate-blink">|</span>
          </h1>
        );
    }
  };

  return displayedTitle(title);
};

TypewriterTitle.defaultProps = {
  title: "h1",
  cls: "text-3xl font-bold",
  words: ["Enjoy", "this Typewriter"],
  typingSpeed: 100,
  deletingSpeed: 90,
  delayBeforeDelete: 1000, // Valeur par défaut en millisecondes
};

export default TypewriterTitle;
