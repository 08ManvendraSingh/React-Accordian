import { BsPlusLg } from "react-icons/bs";

const AccordianItem = ({ data, setShow, showIndex }) => {
  return (
    <div className="px-4 mb-4">
      <div
        className="flex items-center gap-4 bg-[#8d9cc562] p-3 rounded-md font-medium  cursor-pointer"
        onClick={() => setShow()}
      >
        <BsPlusLg className="rounded-full bg-white text-xl text-black" />
        <span>{data?.question}</span>
      </div>
      {showIndex && <div className=" mb-4 p-3 bg-red-100">{data?.answer}</div>}
    </div>
  );
};

export default AccordianItem;
