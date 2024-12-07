export default function ModalContent({ closeModal }) {
  return (
    <div onClick={closeModal} className="fixed inset-0 bg-slate-800/75 flex items-center justify-center">
      <div onClick={(e) => e.stopPropagation()} className="bg-slate-300 text-slate-900 p-10 rounded relative mb-[10vh]">
        <p>Here is the content</p>
      </div>
    </div>
  );
}
