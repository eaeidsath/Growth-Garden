import { useState } from "react";
import { NoteText, Category, SubmitButton } from './PostForm.styles';

export default function PostForm() {
  const [formData, setFormData] = useState({
    // username
    postTextInput: "",
    categoryValue: "",
  });

  const handleTextInputChange = (event) => {
    setFormData({ ...formData, postTextInput: event.target.value });
  };

  const handleDropdownChange = (event) => {
    setFormData({ ...formData, categoryValue: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        How's it going?
        <NoteText
          value={formData.postTextInput}
          onChange={handleTextInputChange}
          maxLength={280}
          rows={6}
          cols={50}
        />
      </label>
      <br />
      <label>
        What goal are you working on?
        <Category value={formData.categoryValue} onChange={handleDropdownChange}>
          <option value="">-- Choose a category --</option>
          <option value="fitness">Fitness </option>
          <option value="finance">Finance</option>
          <option value="mindfulness">Mindfulness</option>
          <option value="career">Career</option>
          <option value="education">Education</option>
          <option value="skills">Skill-building</option>
          <option value="travel">Travel</option>
          <option value="goodwill">Goodwill</option>
          <option value="productivity">Productivity</option>
        </Category>
      </label>
      <br />
      <SubmitButton type="submit">Post</SubmitButton>
    </form>
  );
}
