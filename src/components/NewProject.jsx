import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
export default function NewProject({ onAdd,onCancel }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredText = title.current.value;
    const enteredDesc = description.current.value;
    const enteredDate = date.current.value;

    // Validations

    if (
      enteredText.trim() === "" ||
      enteredDesc.trim() === "" ||
      enteredDate === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredText,
      description: enteredDesc,
      dueDate: enteredDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">Oops.. looks like you forgot to enter a value.</p>
        <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field</p>
      </Modal>
      <div className="w-140 mt-16">
        <menu className="flex items-center justify-end my-4 gap-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950"
            onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 "
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          {/* <p>
          <label htmlFor="">Title</label>
          <input type="text" />
        </p>
        <p>
          <label htmlFor="">Description</label>
          <textarea />
        </p>
        <p>
          <label htmlFor="">Due Date</label>
          <input type="text" />
        </p> */}

          {/* // custom component and is no built-in so we will use forwardRef  */}
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={date} label="Due Date" />
        </div>
      </div>
    </>
  );
}
