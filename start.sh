#!/usr/bin/env bash
# Skrip memulakan pelayan tempatan untuk Math Quest PDPR
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PORT=8085

echo "=========================================================="
echo "🚀 MEMULAKAN PELAYAN MATH QUEST PDPR (TAHUN 5 & 6)"
echo "=========================================================="
echo "Membuka pada port http://localhost:$PORT"
echo "Buka pautan di atas dalam pelayar web anda (Safari / Chrome)"
echo "Tekan Ctrl+C untuk berhenti."
echo "=========================================================="

# Buka pelayar secara automatik pada macOS
if command -v open &> /dev/null; then
  sleep 1 && open "http://localhost:$PORT" &
fi

python3 -m http.server $PORT --directory "$DIR"
