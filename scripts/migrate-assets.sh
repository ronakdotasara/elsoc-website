#!/usr/bin/env bash
# ──────────────────────────────────────────────────────────────────────────────
# One-time asset migration from the legacy Vite site.
# Copies every image the site references into a kebab-case, semantically named
# structure under public/img. Safe to re-run (cp -f, mkdir -p).
# ──────────────────────────────────────────────────────────────────────────────
set -euo pipefail

SRC="${1:-/Users/ronak/Documents/GitHub/elsoc-website/public/img}"
DST="$(cd "$(dirname "$0")/.." && pwd)/public/img"

mkdir -p "$DST"/{brand,faculty,team,events,projects,domains,campus,gallery/emma-workshop,sparkathon/problem-statements}

cp1() { # cp1 <src-relative> <dst-relative>
  if [[ -f "$SRC/$1" ]]; then cp -f "$SRC/$1" "$DST/$2"; else echo "MISSING: $1" >&2; fi
}

# ── Brand ─────────────────────────────────────────────────────────────────────
cp1 "elsoc logo-modified.png"                                 "brand/elsoc-logo.png"
cp1 "elsoc logo.jpg"                                          "brand/elsoc-logo-original.jpg"
cp1 "nithlogo.png"                                            "brand/nith-logo.png"

# ── Faculty ───────────────────────────────────────────────────────────────────
cp1 "op sir.png"                                              "faculty/op-rahi.png"
cp1 "bharti maam1.jpg"                                        "faculty/bharti-bakshi-koul.jpg"
cp1 "nishant sir.jpg"                                         "faculty/katam-nishanth.jpg"
cp1 "chandru sir.jpg"                                         "faculty/chandrasekaran-s.jpg"

# ── Core team ─────────────────────────────────────────────────────────────────
cp1 "Pratibha Bajia~2 - PRATIBHA BAJIA-2.jpg"                 "team/pratibha-bajia.jpg"
cp1 "IMG_5164 - NITIN K-2.jpg"                                "team/nitin.jpg"
cp1 "IMG-20250912-WA0017 - MOHIT KUMAR.jpg"                   "team/mohit-kumar.jpg"
cp1 "IMG_20260416_224726.jpg_11zon.webp"                      "team/kriti-benjwal.webp"
cp1 "Screenshot_20230309-002153~5 - SAHIL JASWAL.png"         "team/sahil-jaswal.png"

# ── Third-year team ───────────────────────────────────────────────────────────
cp1 "ronak.webp"                                              "team/ronak-dotasara.webp"
cp1 "vikalp.jpg"                                              "team/vikalp-chaudhary.jpg"
cp1 "priya.png"                                               "team/priya.png"
cp1 "image - SANYAM VATS(1).jpg"                              "team/sanyam-vats.jpg"
cp1 "1760622833357 - VIKAS KUMAR.jpg"                         "team/vikas-kumar.jpg"
cp1 "IMG_5294 - ARYAN DHAKA.jpg"                              "team/aryan-dhaka.jpg"
cp1 "DSC03412 - RIYA CHOUDHARY.jpg"                           "team/riya-choudhary.jpg"
cp1 "IMG_20251014_135252 - SKANDH NAGAR.jpg"                  "team/skandh-nagar.jpg"
cp1 "IMG_20251018_000105 - AKSHIT VARDHAN (1).jpg"            "team/akshit-vardhan.jpg"

# ── Executive members (first year) ───────────────────────────────────────────
cp1 "25BEE007_AKRITI MALL.jpg"                                "team/akriti-mall.jpg"
cp1 "Ansh.webp"                                               "team/ansh-bishnoi.webp"
cp1 "ADITYA.jpg"                                              "team/aditya-jhajharia.jpg"
cp1 "Aryan_Singh_25BEE023.jpg"                                "team/aryan-singh.jpg"
cp1 "25bee025.jpg"                                            "team/aviral-gupta.jpg"
cp1 "25bee028.jpg"                                            "team/ayush-verma.jpg"
cp1 "IMG-20251109-WA0032.jpg"                                 "team/bulesh-thakur.jpg"
cp1 "Harshita 25BEE045.jpg"                                   "team/harshita.jpg"
cp1 "Jeet25bee050.jpg"                                        "team/jeet-jeedan-behera.jpg"
cp1 "Ketan.png"                                               "team/ketan.png"
cp1 "Krishna thakur.jpg"                                      "team/krishna-pratap-singh.jpg"
cp1 "Kushagra_25BEE060.jpg"                                   "team/kushagra-goel.jpg"
cp1 "Nalin.jpg"                                               "team/neel-nalin-pathak.jpg"
cp1 "Priyanshu webp.webp"                                     "team/priyanshu-saini.webp"
cp1 "Rahul Sonkhla.jpg"                                       "team/rahul-sonkhla.jpg"
cp1 "Tanmay.jpg"                                              "team/tanmay-rana.jpg"
cp1 "Taniya1.webp"                                            "team/taniya-jorwal.webp"

# ── Events ────────────────────────────────────────────────────────────────────
cp1 "Sparkathon Banner.jpeg"                                  "events/sparkathon-banner.jpeg"
cp1 "20251112_164239.jpg"                                     "events/ai-emma-workshop.jpg"
cp1 "blockchain.png"                                          "events/blockchain-workshop.png"
cp1 "15.jpeg"                                                 "events/matlab-workshop.jpeg"
cp1 "corona.jpeg"                                             "events/lightning-unleashed.jpeg"
cp1 "kuiz.png"                                                "events/kuizzithon.png"
cp1 "techictics.png"                                          "events/techletics.png"
cp1 "guestlec.jpg"                                            "events/guest-lecture.jpg"

# ── Projects (legacy showcase) ───────────────────────────────────────────────
cp1 "home automation.png"                                     "projects/smart-home-automation.png"
cp1 "linefollowing robot.avif"                                "projects/line-following-robot.avif"
cp1 "solor project.jpg"                                       "projects/solar-power-monitoring.jpg"
cp1 "guesture control car.png"                                "projects/gesture-controlled-car.png"
cp1 "plc project.webp"                                        "projects/industrial-plc-automation.webp"
cp1 "wheater project.jpg"                                     "projects/weather-monitoring-station.jpg"
cp1 "smart meter .jpeg"                                       "projects/smart-energy-meter.jpeg"
cp1 "fire alaram project.jpg"                                 "projects/fire-detection-system.jpg"

# ── Domains ───────────────────────────────────────────────────────────────────
cp1 "circuit.jpeg"                                            "domains/circuit-design.jpeg"
cp1 "wev dev.jpeg"                                            "domains/web-development.jpeg"
cp1 "aiml.jpeg"                                               "domains/ai-ml.jpeg"
cp1 "media and marketing.jpg"                                 "domains/media-marketing.jpg"
cp1 "finence.jpg"                                             "domains/finance.jpg"
cp1 "content.webp"                                            "domains/content.webp"
cp1 "design.jpg"                                              "domains/design.jpg"
cp1 "management.jpg"                                          "domains/management.jpg"

# ── Campus imagery ────────────────────────────────────────────────────────────
cp1 "nith.jpg"                                                "campus/nith-01.jpg"
cp1 "nithee-2.jpg"                                            "campus/nith-02.jpg"
cp1 "nithee.jpg"                                              "campus/nith-03.jpg"

# ── Gallery: AI-emma workshop ────────────────────────────────────────────────
for i in 1 2 3 4 5 6 7 8 9 10 11 12 14; do
  n=$(printf "%02d" "$i")
  cp1 "emma/emma${i}.jpeg" "gallery/emma-workshop/emma-workshop-${n}.jpeg"
done

# ── Sparkathon problem statements (original scans, kept for reference) ───────
for i in $(seq 1 18); do
  id=$((100 + i))
  cp1 "ProbStatement/${i}.png" "sparkathon/problem-statements/ps-${id}.png"
done

echo "Asset migration complete → $DST"
