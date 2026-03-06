export const stackTrace = `TypeError: Cannot read properties of null (reading 'map')
  at ProductDisplay (http://localhost:3000/static/js/main.chunk.js:XXX:YY)
  at renderWithHooks (http://localhost:3000/static/js/vendors~main.chunk.js:AAA:BB)
  at mountComponent (http://localhost:3000/static/js/vendors~main.chunk.js:BBB:CC)
  ... outras linhas omitidas`;

export const buggyCode = `function ProductDisplay({ products }) {
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}`;

export const fixedCode = `function ProductDisplay({ products }) {
  // Verifica se products existe antes de iterar
  if (!products || products.length === 0) {
    return <p>Nenhum produto encontrado.</p>;
  }

  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}`;

export const alternativeCode = `function ProductDisplay({ products }) {
  return (
    <div>
      {/* Optional chaining evita erro se products for null */}
      {products?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}`;
