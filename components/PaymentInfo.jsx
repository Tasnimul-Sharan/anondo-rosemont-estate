import PaymentInstructions from "./PaymentInstructions";

export default function PaymentInfo() {
  const cityscapersBanks = [
    [
      "1",
      "Sonali Bank PLC",
      "Nagar Bhaban Branch, Dhaka",
      "Anondo Cityscapers Ltd.",
      "1623803000066",
      "BSONBDDH",
      "200274573",
    ],
    [
      "2",
      "Janata Bank PLC",
      "Nagar Bhaban Branch, Dhaka",
      "Anondo Cityscapers Ltd.",
      "0100281648840",
      "JANBBDDHKRN",
      "135274572",
    ],
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <p className="text-center text-gray-600 text-base max-w-3xl mx-auto leading-relaxed mb-10">
        Payments may be made directly to our bank account from any country
        through Bank to Bank or via Money Exchange. The account details are
        listed below:
      </p>

      {/* New Section */}
      <h2 className="text-xl font-bold mt-16 mb-4 text-primary">
        Anondo Cityscapers Ltd.
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Sl</th>
              <th className="p-3 border">Bank</th>
              <th className="p-3 border">Branch</th>
              <th className="p-3 border">Account Name</th>
              <th className="p-3 border">Account No</th>
              <th className="p-3 border">Swift</th>
              <th className="p-3 border">Routing</th>
            </tr>
          </thead>
          <tbody>
            {cityscapersBanks.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                {row.map((cell, i) => (
                  <td key={i} className="p-3 border">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PaymentInstructions />
    </section>
  );
}
