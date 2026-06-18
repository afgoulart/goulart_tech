'use client';

import { useState } from 'react';

const WHATSAPP_NUMBER = '5521985364597';

const inputClass =
  'w-full rounded-lg border border-[var(--border)] bg-[var(--bg-soft)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] outline-none transition-colors focus:border-[var(--brand)]';

export default function WhatsAppForm() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [orcamento, setOrcamento] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const texto = `Nome: ${nome}\nDescrição: ${descricao}\nOrçamento: ${orcamento || 'A definir'}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-md text-left">
      <div className="space-y-4">
        <div>
          <label htmlFor="nome" className="mb-1.5 block text-sm font-medium">
            Nome
          </label>
          <input
            id="nome"
            type="text"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="descricao" className="mb-1.5 block text-sm font-medium">
            Descrição
          </label>
          <textarea
            id="descricao"
            required
            rows={4}
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Conte sobre o seu projeto ou desafio"
            className={`${inputClass} resize-y`}
          />
        </div>

        <div>
          <label htmlFor="orcamento" className="mb-1.5 block text-sm font-medium">
            Orçamento
          </label>
          <select
            id="orcamento"
            value={orcamento}
            onChange={(e) => setOrcamento(e.target.value)}
            className={inputClass}
          >
            <option value="">Selecione uma faixa (opcional)</option>
            <option value="Até R$ 5.000">Até R$ 5.000</option>
            <option value="R$ 5.000 – R$ 15.000">R$ 5.000 – R$ 15.000</option>
            <option value="R$ 15.000 – R$ 50.000">R$ 15.000 – R$ 50.000</option>
            <option value="Acima de R$ 50.000">Acima de R$ 50.000</option>
            <option value="A definir">A definir</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-medium text-[#04210f] transition-opacity hover:opacity-90"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.042zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
        Enviar pelo WhatsApp
      </button>
    </form>
  );
}
