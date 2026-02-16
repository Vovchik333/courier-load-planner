import { notes } from "./constansts"

export const Notes: React.FC = () => {
  return (
    <section>
      <h3 className="text-lg font-semibold mb-3">Notes</h3>
      <ul className="space-y-2 text-sm list-disc list-inside">
        {notes.map(note => <li key={note}>{note}</li>)}
      </ul>
    </section>
  )
}
