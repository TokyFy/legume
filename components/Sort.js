import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import {useState} from "react";
import { useSearchParams } from 'next/navigation'


export const Sort = () => {
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get('sortBy') ?? '');

  const router = useRouter();

  const handleSort = async (sortBy) => {
    const params = new URLSearchParams({ sortBy });
    setValue(sortBy)
    await router.push(`?${params.toString()}`);
  };

  return (
    <Select.Root value={value} onValueChange={handleSort}>
      <Select.Trigger
        aria-label="Food"
        className={
          "flex outline-0 bg-white py-2 px-4 justify-between items-baseline w-32"
        }
      >
        <Select.Value placeholder="Sort by..." />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          position={"popper"}
          className={"bg-white w-32 -ml-2 mt-1"}
        >
          <Select.ScrollUpButton>
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport>
            <Select.Item className={"py-2 px-4 outline-0"} value="name">
              <Select.ItemText>Name</Select.ItemText>
            </Select.Item>
            <Select.Item className={"py-2 px-4 outline-0"} value="label">
              <Select.ItemText>Label</Select.ItemText>
            </Select.Item>
          </Select.Viewport>
          <Select.ScrollDownButton>
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
