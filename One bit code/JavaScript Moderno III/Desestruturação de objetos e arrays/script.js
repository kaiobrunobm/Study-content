const person = {
  name: "Kaio",
  job: "Developer",
  parents: ["Eleni", "Wedson"],
};

const { job, name, parents } = person;
const [mother, father] = parents;

function create_user({ name, job, parents }) {
  const id = Math.floor(Math.random() * 9999);
  return {
    id,
    name,
    job,
    parents,
  };
}
const Kaio = create_user(person);

console.log(Kaio);
