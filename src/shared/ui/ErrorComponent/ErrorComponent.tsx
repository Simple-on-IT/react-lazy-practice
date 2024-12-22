export function ErrorComponent() {
  throw new Error("Упс, что-то пошло не так!");
  
  return (
    <div>err</div>
  )
}