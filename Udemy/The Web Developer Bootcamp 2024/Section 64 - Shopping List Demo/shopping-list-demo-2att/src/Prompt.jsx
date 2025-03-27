import { calculate } from "./utils";

export default function Prompt() {
    console.log(calculate(prompt("Enter expression")));
}