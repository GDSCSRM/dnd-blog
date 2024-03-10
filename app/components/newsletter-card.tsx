import Input from "./input";
import Button from "./button";

export default function NewsletterCard() {
  return (
    <div className="flex px-10 py-16 gap-20 bg-gray-100 border border-black rounded-md">
      <div className="flex flex-col gap-10 basis-1/2">
        <h1 className="text-xl font-bold">
          Stay notified, never miss an update! Subscribe to my newsletter.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris.{" "}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
        </div>
        <Input placeholder="Email" />
        <div className="flex justify-between">
          <label className="flex gap-2 items-center text-nowrap">
            <input type="checkbox" />I agree with the terms
          </label>
          <Button>Count me in!</Button>
        </div>
      </div>
    </div>
  );
}
