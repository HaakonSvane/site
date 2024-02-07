import { Heading, Text } from "@radix-ui/themes";
import type { MetaFunction } from "@remix-run/node";
import logo from "../../public/logo.svg";

export const meta: MetaFunction = () => {
  return [
    { title: "Haakon Svane" },
    { name: "description", content: "Personal site for Haakon Svane" },
  ];
};

export default function Index() {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-4">
      <img src={logo} alt="logo" className="w-40 h-40" />
      <div>
        <Heading className="font-heading text-5xl font-bold">
          Haakon Svane
        </Heading>
        <Text className="font-sans">Personal blog to come soon</Text>
      </div>
    </div>
  );
}
