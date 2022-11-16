let multiple_table_number = parseFloat(
  prompt("Enter the number thaht you want", "")
);

let multiple_table_result = "";

for (let number_multiplier = 1; number_multiplier <= 20; number_multiplier++) {
  let math_multiply = multiple_table_number * number_multiplier;
  multiple_table_result += `${multiple_table_number} X ${number_multiplier} = ${math_multiply}\n`;
}

alert(
  `The multiplication table of the number ${multiple_table_number} is:\n${multiple_table_result}\n`
);
