export const Home = () => {
  return (
    <>
      <h1>Beautix</h1>
      <button onClick={() => { throw new Error('test sentry: error intencional') }}>Click</button>
    </>
  )
}
