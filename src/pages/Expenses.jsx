import EntryForm from "../components/EntryForm";

export default function Expenses() {
  return (
    <EntryForm
      type="expense"
      title="Expenses"
      subtitle="Log your spending and keep an eye on your outflows."
    />
  );
}
