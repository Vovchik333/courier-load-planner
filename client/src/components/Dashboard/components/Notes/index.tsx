const notes: string[] = [
  "Each order belongs to ONE hour slot.",
  "Cell shows total work units.",
  "If load &gt; limit → over +N.",
  "Click a cell to view orders.",
  "Use reassign to fix overload.",
]

export const Notes: React.FC = () => {
  return (
    <section>
      <h3 className="text-lg font-semibold mb-3">Notes</h3>
      <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
        {notes.map(note => <li key={note}>{note}</li>)}
      </ul>
    </section>
  )
}