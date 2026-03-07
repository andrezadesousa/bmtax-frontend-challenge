export function FlowDiagram() {
  return (
    <div className="bg-white border rounded-lg p-4 md:p-6">
      {/* Desktop: horizontal */}
      <div className="hidden md:flex items-center justify-between text-sm">
        <div className="flex flex-col items-center">
          <div className="px-4 py-2 bg-surface-light border rounded-md">
            Usuário
          </div>
        </div>

        <div className="w-16 border-t" />

        <div className="flex flex-col items-center">
          <div className="px-4 py-2 bg-surface-light border rounded-md">
            Frontend
          </div>
        </div>

        <div className="w-16 border-t" />

        <div className="flex flex-col items-center">
          <div className="px-4 py-2 bg-surface-light border rounded-md">
            API Auth
          </div>
        </div>

        <div className="w-16 border-t" />

        <div className="flex flex-col items-center">
          <div className="px-4 py-2 bg-surface-light border rounded-md">
            API Leads
          </div>
        </div>
      </div>

      {/* Mobile: vertical */}
      <div className="flex md:hidden flex-col items-center gap-2 text-sm">
        <div className="px-4 py-2 bg-surface-light border rounded-md w-full text-center">
          Usuário
        </div>
        <div className="h-4 border-l" />
        <div className="px-4 py-2 bg-surface-light border rounded-md w-full text-center">
          Frontend
        </div>
        <div className="h-4 border-l" />
        <div className="px-4 py-2 bg-surface-light border rounded-md w-full text-center">
          API Auth
        </div>
        <div className="h-4 border-l" />
        <div className="px-4 py-2 bg-surface-light border rounded-md w-full text-center">
          API Leads
        </div>
      </div>

      <div className="mt-4 md:mt-6 text-xxs md:text-xs text-gray-500">
        Fluxo: usuário preenche formulário → servidor autentica → recebe token →
        envia dados do lead autenticado.
      </div>
    </div>
  );
}
