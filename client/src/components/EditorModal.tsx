import React, { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

/*
 * Custom "star" icon for the toolbar using an Octicon
 * https://octicons.github.io
 */
const CustomButton = () => <span className="octicon octicon-star">dfgdfg</span>;

/*
 * Event handler to be attached using Quill toolbar module
 * http://quilljs.com/docs/modules/toolbar/
 */
function insertStar(this: { quill: any; insertStar: () => void }) {
  const cursorPosition = this.quill.getSelection().index;
  this.quill.insertText(cursorPosition, "★");
  this.quill.setSelection(cursorPosition + 1);
}

/*
 * Custom toolbar component including insertStar button and dropdowns
 */
const CustomToolbar = () => (
  <div id="toolbar">
    {/* <select
      className="ql-header"
      defaultValue={""}
      onChange={(e) => e.persist()}
    >
      <option value="1"></option>
      <option value="2"></option>
      <option selected></option>
    </select>
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <select className="ql-color">
      <option value="red"></option>
      <option value="green"></option>
      <option value="blue"></option>
      <option value="orange"></option>
      <option value="violet"></option>
      <option value="#d0d1d2"></option>
      <option selected></option>
    </select> */}
    <span className="ql-formats">
      <select className="ql-font"></select>
      <select className="ql-size"></select>
    </span>
    <span className="ql-formats">
      <button className="ql-bold"></button>
      <button className="ql-italic"></button>
      <button className="ql-underline"></button>
      <button className="ql-strike"></button>
    </span>
    <span className="ql-formats">
      <select className="ql-color"></select>
      <select className="ql-background"></select>
    </span>
    <span className="ql-formats">
      <button className="ql-script" value="sub"></button>
      <button className="ql-script" value="super"></button>
    </span>
    <span className="ql-formats">
      <button className="ql-header" value="1"></button>
      <button className="ql-header" value="2"></button>
      <button className="ql-blockquote"></button>
      <button className="ql-code-block"></button>
    </span>
    <span className="ql-formats">
      <button className="ql-list" value="ordered"></button>
      <button className="ql-list" value="bullet"></button>
      <button className="ql-indent" value="-1"></button>
      <button className="ql-indent" value="+1"></button>
    </span>
    <span className="ql-formats">
      <button className="ql-direction" value="rtl"></button>
      <select className="ql-align"></select>
    </span>
    <span className="ql-formats">
      <button className="ql-link"></button>
      <button className="ql-image"></button>
      <button className="ql-video"></button>
      <button className="ql-formula"></button>
    </span>
    <span className="ql-formats">
      <button className="ql-clean"></button>
    </span>
    <span className="ql-formats">
      <button className="ql-insertStar">
        <CustomButton />
      </button>
    </span>
  </div>
);

interface EditorModalProps {
  cardData: string;
  isOpen: boolean;
  onClose: () => void;
}

const EditorModal: React.FC<EditorModalProps> = ({
  cardData,
  isOpen,
  onClose,
}) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(() => onClose(), 300);
  }, [onClose]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        editorRef.current &&
        !editorRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      setVisible(true);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClose]);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  // const modules = {
  //   toolbar: [
  //     [{ header: [1, 2, false] }],
  //     ["bold", "italic", "underline", "strike", "blockquote"],
  //     [
  //       { list: "ordered" },
  //       { list: "bullet" },
  //       { indent: "-1" },
  //       { indent: "+1" },
  //     ],
  //     ["link", "image"],
  //     ["clean"],
  //   ],
  // };

  const modules = {
    toolbar: {
      container: "#toolbar",
      handlers: {
        insertStar: insertStar,
      },
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-zinc-800 z-40 ${
          visible ? "opacity-50" : "opacity-0"
        } modal-background`}
      ></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          ref={editorRef}
          className={`bg-black w-4/5 h-4/5 relative rounded-lg border border-zinc-700 ${
            visible ? "opacity-100" : "opacity-0"
          } modal-content flex flex-col`}
        >
          <CustomToolbar />
          <QuillNoSSRWrapper
            // formats={formats}
            modules={modules}
            className="text-white h-full overflow-y-auto flex-grow"
            placeholder="Start typing..."
          />
        </div>
      </div>
    </>
  );
};

export default EditorModal;
