import { mutation } from "./_generated/server"
import { v } from "convex/values"

export const seedAll = mutation({
  args: {},
  handler: async (ctx) => {
    // Clear existing data
    const existingPhones = await ctx.db.query("phones").collect()
    for (const phone of existingPhones) {
      // Delete related specs, prices, reviews
      const specs = await ctx.db.query("specs").filter(q => q.eq(q.field("phoneId"), phone._id)).collect()
      for (const spec of specs) await ctx.db.delete(spec._id)
      const prices = await ctx.db.query("prices").filter(q => q.eq(q.field("phoneId"), phone._id)).collect()
      for (const price of prices) await ctx.db.delete(price._id)
      const reviews = await ctx.db.query("reviews").filter(q => q.eq(q.field("phoneId"), phone._id)).collect()
      for (const review of reviews) await ctx.db.delete(review._id)
      await ctx.db.delete(phone._id)
    }

    const now = Date.now()

    // ── 1. TECNO ──────────────────────────────────────────────────────────────
    const spark30 = await ctx.db.insert("phones", {
      brand: "Tecno", model: "Spark 30",
      slug: "tecno-spark-30-price-nigeria-specs-review",
      status: "current", announcedDate: "January 2025",
      releaseDateNigeria: "February 2025", imageUrl: "", createdAt: now, updatedAt: now,
    })
    await ctx.db.insert("specs", {
      phoneId: spark30, display: "6.67 inches, AMOLED, 120Hz",
      processor: "MediaTek Helio G91 Ultra", ram: "8GB", storage: "256GB",
      battery: "5000mAh", fastCharging: "18W",
      rearCamera: "50MP + 2MP + AI lens", frontCamera: "8MP",
      os: "Android 14, HiOS 14", network: "4G LTE",
      colorOptions: ["Obsidian Black", "Cerulean Blue", "Sahara Sand"],
      weight: "190g", dimensions: "163.6 x 75.6 x 8.3mm",
      fingerprint: "Side-mounted", headphoneJack: true, updatedAt: now,
    })
    await ctx.db.insert("prices", {
      phoneId: spark30, amount: 128000, currency: "NGN",
      source: "Cybervilla", sourceUrl: "https://cybervilla.io/tecno-spark-30", recordedAt: now,
    })
    await ctx.db.insert("reviews", {
      phoneId: spark30,
      title: "Tecno Spark 30 Review — The Budget King of 2025?",
      content: "The Tecno Spark 30 is the best phone you can buy under ₦150,000 in Nigeria right now. It delivers a premium 120Hz AMOLED display, all-day battery life, and a capable camera in a package that feels far more expensive than it is.\n\nDESIGN & DISPLAY\nThe Spark 30 looks far more expensive than it is. The 6.67-inch AMOLED display with 120Hz refresh rate is genuinely impressive at this price.\n\nPERFORMANCE\nPowered by the MediaTek Helio G91 Ultra, the Spark 30 handles day-to-day tasks with ease. Gaming is surprisingly capable.\n\nCAMERA\nThe 50MP main sensor takes surprisingly detailed photos in good lighting.\n\nBATTERY\nThe 5000mAh battery easily lasts a full day of heavy use.",
      rating: 8.2,
      pros: ["120Hz AMOLED display — exceptional at this price", "5000mAh battery delivers all-day power", "256GB storage as standard", "50MP camera takes vibrant photos", "Premium design with matte finish", "3.5mm headphone jack included"],
      cons: ["No 5G connectivity", "18W charging is slow by 2025 standards", "No ultrawide camera"],
      verdict: "The Tecno Spark 30 is the best phone you can buy under ₦150,000 in Nigeria right now. It delivers a premium 120Hz AMOLED display, all-day battery life, and a capable camera in a package that feels far more expensive than it is.",
      author: "Adeola Alabi", isFeatured: true, publishedAt: now, updatedAt: now, status: "published",
    })

    const spark20 = await ctx.db.insert("phones", {
      brand: "Tecno", model: "Spark 20",
      slug: "tecno-spark-20-price-nigeria-specs-review",
      status: "current", announcedDate: "August 2024",
      releaseDateNigeria: "October 2024", imageUrl: "", createdAt: now, updatedAt: now,
    })
    await ctx.db.insert("specs", {
      phoneId: spark20, display: "6.6 inches, IPS LCD, 90Hz",
      processor: "MediaTek Helio G85", ram: "4GB", storage: "128GB",
      battery: "5000mAh", fastCharging: "18W",
      rearCamera: "50MP + AI lens", frontCamera: "8MP",
      os: "Android 13, HiOS 13", network: "4G LTE",
      colorOptions: ["Glacier Blue", "Gravity Black", "Neon Green"],
      weight: "185g", dimensions: "163.8 x 75.6 x 8.5mm",
      fingerprint: "Side-mounted", headphoneJack: true, updatedAt: now,
    })
    await ctx.db.insert("prices", {
      phoneId: spark20, amount: 98000, currency: "NGN",
      source: "Cybervilla", sourceUrl: "https://cybervilla.io/tecno-spark-20", recordedAt: now,
    })
    await ctx.db.insert("reviews", {
      phoneId: spark20,
      title: "Tecno Spark 20 Review — Solid Budget Performer",
      content: "The Tecno Spark 20 refines the formula that made the Spark series so popular in Nigeria.",
      rating: 7.8,
      pros: ["Affordable price point", "5000mAh battery", "90Hz display", "50MP camera"],
      cons: ["IPS LCD (not AMOLED)", "4GB RAM limited", "No 5G"],
      verdict: "A solid budget option that gets the basics right without breaking the bank.",
      author: "Adeola Alabi", isFeatured: false, publishedAt: now, updatedAt: now, status: "published",
    })

    const camon30 = await ctx.db.insert("phones", {
      brand: "Tecno", model: "Camon 30",
      slug: "tecno-camon-30-price-nigeria-specs-review",
      status: "current", announcedDate: "February 2025",
      releaseDateNigeria: "April 2025", imageUrl: "", createdAt: now, updatedAt: now,
    })
    await ctx.db.insert("specs", {
      phoneId: camon30, display: "6.78 inches, AMOLED, 120Hz",
      processor: "MediaTek Helio G99 Ultimate", ram: "8GB", storage: "256GB",
      battery: "5000mAh", fastCharging: "70W",
      rearCamera: "50MP + 2MP + 2MP", frontCamera: "50MP",
      os: "Android 14, HiOS 14", network: "4G LTE",
      colorOptions: ["Himalayan Snow", "Emerald Lake", "Charcoal Black"],
      weight: "195g", dimensions: "165.3 x 75.3 x 8.5mm",
      fingerprint: "Under-display", headphoneJack: false, updatedAt: now,
    })
    await ctx.db.insert("prices", {
      phoneId: camon30, amount: 175000, currency: "NGN",
      source: "Cybervilla", sourceUrl: "https://cybervilla.io/tecno-camon-30", recordedAt: now,
    })
    await ctx.db.insert("reviews", {
      phoneId: camon30,
      title: "Tecno Camon 30 Review — Premium Midrange Contender",
      content: "The Camon 30 is Tecno's most serious attempt at the premium midrange segment.",
      rating: 8.1,
      pros: ["70W fast charging", "50MP front camera", "120Hz AMOLED", "Premium design"],
      cons: ["No 5G", "No wireless charging", "No ultrawide camera"],
      verdict: "An impressive midrange phone with flagship-level charging speed.",
      author: "Adeola Alabi", isFeatured: false, publishedAt: now, updatedAt: now, status: "published",
    })

    const phantomVFlip = await ctx.db.insert("phones", {
      brand: "Tecno", model: "Phantom V Flip",
      slug: "tecno-phantom-v-flip-price-nigeria-specs-review",
      status: "current", announcedDate: "October 2023",
      releaseDateNigeria: "January 2024", imageUrl: "", createdAt: now, updatedAt: now,
    })
    await ctx.db.insert("specs", {
      phoneId: phantomVFlip, display: "6.9 inches (unfolded), Foldable AMOLED, 120Hz",
      processor: "MediaTek Dimensity 8050", ram: "8GB", storage: "256GB",
      battery: "4000mAh", fastCharging: "45W",
      rearCamera: "64MP + 13MP", frontCamera: "32MP",
      os: "Android 13, HiOS 13", network: "5G",
      colorOptions: ["Iconic Black", "Dawn White"],
      weight: "194g", dimensions: "165.0 x 72.4 x 7.6mm (unfolded)",
      fingerprint: "Side-mounted", headphoneJack: false, updatedAt: now,
    })
    await ctx.db.insert("prices", {
      phoneId: phantomVFlip, amount: 420000, currency: "NGN",
      source: "Cybervilla", sourceUrl: "https://cybervilla.io/tecno-phantom-v-flip", recordedAt: now,
    })

    const sparkGo2024 = await ctx.db.insert("phones", {
      brand: "Tecno", model: "Spark Go 2024",
      slug: "tecno-spark-go-2024-price-nigeria-specs-review",
      status: "current", announcedDate: "November 2024",
      releaseDateNigeria: "December 2024", imageUrl: "", createdAt: now, updatedAt: now,
    })
    await ctx.db.insert("specs", {
      phoneId: sparkGo2024, display: "6.6 inches, IPS LCD, 90Hz",
      processor: "Unisoc T606", ram: "3GB", storage: "64GB",
      battery: "5000mAh", fastCharging: "10W",
      rearCamera: "13MP + AI lens", frontCamera: "8MP",
      os: "Android 13 (Go edition), HiOS 13", network: "4G LTE",
      colorOptions: ["Mystery White", "Lake Blue"],
      weight: "182g", dimensions: "163.7 x 75.6 x 8.6mm",
      fingerprint: "Rear-mounted", headphoneJack: true, updatedAt: now,
    })
    await ctx.db.insert("prices", {
      phoneId: sparkGo2024, amount: 58000, currency: "NGN",
      source: "Slot", sourceUrl: "https://slot.ng/tecno-spark-go-2024", recordedAt: now,
    })

    const pop9 = await ctx.db.insert("phones", {
      brand: "Tecno", model: "Pop 9",
      slug: "tecno-pop-9-price-nigeria-specs-review",
      status: "current", announcedDate: "July 2024",
      releaseDateNigeria: "August 2024", imageUrl: "", createdAt: now, updatedAt: now,
    })
    await ctx.db.insert("specs", {
      phoneId: pop9, display: "6.6 inches, IPS LCD, 90Hz",
      processor: "MediaTek Helio A22", ram: "2GB", storage: "32GB",
      battery: "5000mAh", fastCharging: "10W",
      rearCamera: "13MP", frontCamera: "5MP",
      os: "Android 13 (Go edition), HiOS 13", network: "4G LTE",
      colorOptions: ["Startrail Black", "Starlight Blue"],
      weight: "178g", dimensions: "163.9 x 75.5 x 8.9mm",
      fingerprint: "Rear-mounted", headphoneJack: true, updatedAt: now,
    })
    await ctx.db.insert("prices", {
      phoneId: pop9, amount: 48000, currency: "NGN",
      source: "Slot", sourceUrl: "https://slot.ng/tecno-pop-9", recordedAt: now,
    })

    // ── 2. INFINIX ────────────────────────────────────────────────────────────
    const note40Pro = await ctx.db.insert("phones", {
      brand: "Infinix", model: "Note 40 Pro",
      slug: "infinix-note-40-pro-price-nigeria-specs-review",
      status: "current", announcedDate: "March 2024",
      releaseDateNigeria: "May 2024", imageUrl: "", createdAt: now, updatedAt: now,
    })
    await ctx.db.insert("specs", {
      phoneId: note40Pro, display: "6.78 inches, AMOLED, 120Hz",
      processor: "MediaTek Helio G99 Ultimate", ram: "8GB", storage: "256GB",
      battery: "4600mAh", fastCharging: "100W",
      rearCamera: "108MP + 2MP + 2MP", frontCamera: "32MP",
      os: "Android 14, XOS 14", network: "4G LTE",
      colorOptions: ["Vintage Green", "Obsidian Black", "Palm Blue"],
      weight: "190g", dimensions: "164.1 x 75.5 x 8.2mm",
      fingerprint: "Under-display", headphoneJack: false, updatedAt: now,
    })
    await ctx.db.insert("prices", {
      phoneId: note40Pro, amount: 198000, currency: "NGN",
      source: "Cybervilla", sourceUrl: "https://cybervilla.io/infinix-note-40-pro", recordedAt: now,
    })
    await ctx.db.insert("reviews", {
      phoneId: note40Pro,
      title: "Infinix Note 40 Pro Review — 100W Charging is a Game Changer",
      content: "Infinix's Note series has always been about value, and the Note 40 Pro takes it to the next level.",
      rating: 8.0,
      pros: ["100W fast charging", "108MP camera", "120Hz AMOLED", "100W charger in box"],
      cons: ["No 5G", "No wireless charging", "Large and heavy"],
      verdict: "100W charging alone makes this phone worth considering.",
      author: "Adeola Alabi", isFeatured: false, publishedAt: now, updatedAt: now, status: "published",
    })

    const hot40i = await ctx.db.insert("phones", {
      brand: "Infinix", model: "Hot 40i",
      slug: "infinix-hot-40i-price-nigeria-specs-review",
      status: "current", announcedDate: "November 2023",
      releaseDateNigeria: "December 2023", imageUrl: "", createdAt: now, updatedAt: now,
    })
    await ctx.db.insert("specs", {
      phoneId: hot40i, display: "6.56 inches, IPS LCD, 90Hz",
      processor: "UNISOC T606", ram: "8GB", storage: "128GB",
      battery: "5000mAh", fastCharging: "18W",
      rearCamera: "50MP + AI lens", frontCamera: "8MP",
      os: "Android 13, XOS 13", network: "4G LTE",
      colorOptions: ["Starlit Purple", "Magic Skin 3.0", "Palm Blue"],
      weight: "190g", dimensions: "164.7 x 75.4 x 8.3mm",
      fingerprint: "Side-mounted", headphoneJack: true, updatedAt: now,
    })
    await ctx.db.insert("prices", {
      phoneId: hot40i, amount: 85000, currency: "NGN",
      source: "Cybervilla", sourceUrl: "https://cybervilla.io/infinix-hot-40i", recordedAt: now,
    })

    const gt20Pro = await ctx.db.insert("phones", {
      brand: "Infinix", model: "GT 20 Pro",
      slug: "infinix-gt-20-pro-price-nigeria-specs-review",
      status: "current", announcedDate: "April 2024",
      releaseDateNigeria: "June 2024", imageUrl: "", createdAt: now, updatedAt: now,
    })
    await ctx.db.insert("specs", {
      phoneId: gt20Pro, display: "6.67 inches, AMOLED, 144Hz",
      processor: "MediaTek Dimensity 8200", ram: "12GB", storage: "256GB",
      battery: "5000mAh", fastCharging: "45W",
      rearCamera: "108MP + 2MP + 2MP", frontCamera: "32MP",
      os: "Android 14, XOS 14", network: "5G",
      colorOptions: ["Mecha Blue", "Mecha Orange", "Mecha Silver"],
      weight: "193g", dimensions: "164.3 x 75.2 x 8.2mm",
      fingerprint: "Under-display", headphoneJack: false, updatedAt: now,
    })
    await ctx.db.insert("prices", {
      phoneId: gt20Pro, amount: 285000, currency: "NGN",
      source: "Cybervilla", sourceUrl: "https://cybervilla.io/infinix-gt-20-pro", recordedAt: now,
    })
    await ctx.db.insert("reviews", {
      phoneId: gt20Pro,
      title: "Infinix GT 20 Pro Review — The Gaming Phone That Won't Break the Bank",
      content: "With 144Hz and the Dimensity 8200, the GT 20 Pro is Infinix's most serious gaming phone yet.",
      rating: 8.7,
      pros: ["144Hz AMOLED — incredibly smooth", "Dimensity 8200 handles any game", "108MP camera", "5G connectivity", "Gaming shoulder triggers"],
      cons: ["No wireless charging", "No headphone jack", "Aggressive gaming aesthetics"],
      verdict: "The best gaming phone under ₦400,000 in Nigeria.",
      author: "Adeola Alabi", isFeatured: true, publishedAt: now, updatedAt: now, status: "published",
    })

    const smart8Pro = await ctx.db.insert("phones", {
      brand: "Infinix", model: "Smart 8 Pro",
      slug: "infinix-smart-8-pro-price-nigeria-specs-review",
      status: "current", announcedDate: "January 2024",
      releaseDateNigeria: "February 2024", imageUrl: "", createdAt: now, updatedAt: now,
    })
    await ctx.db.insert("specs", {
      phoneId: smart8Pro, display: "6.6 inches, IPS LCD, 90Hz",
      processor: "MediaTek Helio A22", ram: "4GB", storage: "64GB",
      battery: "5000mAh", fastCharging: "10W",
      rearCamera: "50MP", frontCamera: "8MP",
      os: "Android 13 (Go edition), XOS 13", network: "4G LTE",
      colorOptions: ["Rainbow Blue", "Mate Green", "Classic Black"],
      weight: "183g", dimensions: "163.6 x 75.6 x 8.5mm",
      fingerprint: "Side-mounted", headphoneJack: true, updatedAt: now,
    })
    await ctx.db.insert("prices", {
      phoneId: smart8Pro, amount: 55000, currency: "NGN",
      source: "Slot", sourceUrl: "https://slot.ng/infinix-smart-8-pro", recordedAt: now,
    })

    // ── 3. SAMSUNG ────────────────────────────────────────────────────────────
    const galaxyA16_5G = await ctx.db.insert("phones", {
      brand: "Samsung", model: "Galaxy A16 5G",
      slug: "samsung-galaxy-a16-5g-price-nigeria-specs-review",
      status: "current", announcedDate: "October 2024",
      releaseDateNigeria: "November 2024", imageUrl: "", createdAt: now, updatedAt: now,
    })
    await ctx.db.insert("specs", {
      phoneId: galaxyA16_5G, display: "6.7 inches, Super AMOLED, 90Hz",
      processor: "MediaTek Dimensity 6300", ram: "8GB", storage: "256GB",
      battery: "5000mAh", fastCharging: "25W",
      rearCamera: "50MP + 5MP + 2MP", frontCamera: "13MP",
      os: "Android 14, One UI 6", network: "5G",
      colorOptions: ["Black", "Light Green", "Silver"],
      weight: "200g", dimensions: "167.7 x 77.2 x 7.9mm",
      fingerprint: "Side-mounted", headphoneJack: true, updatedAt: now,
    })
    await ctx.db.insert("prices", {
      phoneId: galaxyA16_5G, amount: 248000, currency: "NGN",
      source: "Jumia", sourceUrl: "https://jumia.ng/samsung-galaxy-a16-5g", recordedAt: now,
    })
    await ctx.db.insert("reviews", {
      phoneId: galaxyA16_5G,
      title: "Samsung Galaxy A16 5G Review — 5G for the Masses",
      content: "Samsung brings 5G to the budget segment without making serious compromises.",
      rating: 8.5,
      pros: ["5G connectivity", "4 years of OS updates", "Super AMOLED display", "50MP camera"],
      cons: ["25W charging slower than competitors", "Plastic back"],
      verdict: "The best Samsung phone you can buy in Nigeria under ₦300,000.",
      author: "Adeola Alabi", isFeatured: false, publishedAt: now, updatedAt: now, status: "published",
    })

    const galaxyA06 = await ctx.db.insert("phones", {
      brand: "Samsung", model: "Galaxy A06",
      slug: "samsung-galaxy-a06-price-nigeria-specs-review",
      status: "current", announcedDate: "August 2024",
      releaseDateNigeria: "September 2024", imageUrl: "", createdAt: now, updatedAt: now,
    })
    await ctx.db.insert("specs", {
      phoneId: galaxyA06, display: "6.7 inches, PLS LCD, 60Hz",
      processor: "MediaTek Helio G85", ram: "4GB", storage: "64GB",
      battery: "5000mAh", fastCharging: "25W",
      rearCamera: "50MP + 2MP", frontCamera: "8MP",
      os: "Android 14, One UI 6", network: "4G LTE",
      colorOptions: ["Black", "Light Blue", "Gold"],
      weight: "195g", dimensions: "167.3 x 77.3 x 8.3mm",
      fingerprint: "Side-mounted", headphoneJack: true, updatedAt: now,
    })
    await ctx.db.insert("prices", {
      phoneId: galaxyA06, amount: 95000, currency: "NGN",
      source: "Jumia", sourceUrl: "https://jumia.ng/samsung-galaxy-a06", recordedAt: now,
    })

    const galaxyS24FE = await ctx.db.insert("phones", {
      brand: "Samsung", model: "Galaxy S24 FE",
      slug: "samsung-galaxy-s24-fe-price-nigeria-specs-review",
      status: "current", announcedDate: "September 2024",
      releaseDateNigeria: "October 2024", imageUrl: "", createdAt: now, updatedAt: now,
    })
    await ctx.db.insert("specs", {
      phoneId: galaxyS24FE, display: "6.7 inches, Dynamic AMOLED 2X, 120Hz",
      processor: "Exynos 2400e", ram: "8GB", storage: "128GB",
      battery: "4700mAh", fastCharging: "25W",
      rearCamera: "50MP + 12MP + 8MP (3x optical)", frontCamera: "10MP",
      os: "Android 14, One UI 6", network: "5G",
      colorOptions: ["Blue", "Graphite", "Mint", "Silver"],
      weight: "213g", dimensions: "162.0 x 77.3 x 8.0mm",
      fingerprint: "Under-display", headphoneJack: false, updatedAt: now,
    })
    await ctx.db.insert("prices", {
      phoneId: galaxyS24FE, amount: 680000, currency: "NGN",
      source: "Jumia", sourceUrl: "https://jumia.ng/samsung-galaxy-s24-fe", recordedAt: now,
    })
    await ctx.db.insert("reviews", {
      phoneId: galaxyS24FE,
      title: "Samsung Galaxy S24 FE Review — The Affordable Flagship",
      content: "The Fan Edition delivers flagship performance and cameras at a fraction of the S24 Ultra price.",
      rating: 9.0,
      pros: ["Exynos 2400e handles any task", "50MP camera with 3x optical zoom", "7 years of updates", "IP68 water resistance", "Beautiful display"],
      cons: ["Expensive for a 'Fan Edition'", "No charger in box", "No headphone jack"],
      verdict: "The best Android phone in Nigeria under ₦1,000,000.",
      author: "Adeola Alabi", isFeatured: true, publishedAt: now, updatedAt: now, status: "published",
    })

    // ── 4. XIAOMI ─────────────────────────────────────────────────────────────
    const redmiNote14 = await ctx.db.insert("phones", {
      brand: "Xiaomi", model: "Redmi Note 14",
      slug: "xiaomi-redmi-note-14-price-nigeria-specs-review",
      status: "current", announcedDate: "September 2024",
      releaseDateNigeria: "October 2024", imageUrl: "", createdAt: now, updatedAt: now,
    })
    await ctx.db.insert("specs", {
      phoneId: redmiNote14, display: "6.67 inches, AMOLED, 120Hz",
      processor: "MediaTek Helio G99 Ultra", ram: "8GB", storage: "256GB",
      battery: "5500mAh", fastCharging: "33W",
      rearCamera: "200MP + 8MP + 2MP", frontCamera: "20MP",
      os: "Android 14, MIUI 14", network: "4G LTE",
      colorOptions: ["Midnight Black", "Ocean Teal", "Starlight Purple"],
      weight: "200g", dimensions: "162.3 x 75.5 x 8.0mm",
      fingerprint: "Under-display", headphoneJack: true, updatedAt: now,
    })
    await ctx.db.insert("prices", {
      phoneId: redmiNote14, amount: 185000, currency: "NGN",
      source: "Cybervilla", sourceUrl: "https://cybervilla.io/xiaomi-redmi-note-14", recordedAt: now,
    })
    await ctx.db.insert("reviews", {
      phoneId: redmiNote14,
      title: "Xiaomi Redmi Note 14 Review — 200MP on a Budget",
      content: "Xiaomi pushes the megapixel wars further with a 200MP camera on a phone under ₦200,000.",
      rating: 8.4,
      pros: ["200MP camera is incredible", "5500mAh battery", "120Hz AMOLED", "3.5mm jack"],
      cons: ["33W charging slower than competition", "No 5G"],
      verdict: "Best camera phone under ₦250,000 in Nigeria.",
      author: "Adeola Alabi", isFeatured: true, publishedAt: now, updatedAt: now, status: "published",
    })

    const redmi14C = await ctx.db.insert("phones", {
      brand: "Xiaomi", model: "Redmi 14C",
      slug: "xiaomi-redmi-14c-price-nigeria-specs-review",
      status: "current", announcedDate: "August 2024",
      releaseDateNigeria: "September 2024", imageUrl: "", createdAt: now, updatedAt: now,
    })
    await ctx.db.insert("specs", {
      phoneId: redmi14C, display: "6.88 inches, IPS LCD, 120Hz",
      processor: "MediaTek Helio G81", ram: "4GB", storage: "128GB",
      battery: "5160mAh", fastCharging: "18W",
      rearCamera: "50MP + 2MP", frontCamera: "13MP",
      os: "Android 14, MIUI 14", network: "4G LTE",
      colorOptions: ["Midnight Black", "Sage Green", "Dreamy Purple"],
      weight: "204g", dimensions: "171.9 x 77.8 x 8.3mm",
      fingerprint: "Side-mounted", headphoneJack: true, updatedAt: now,
    })
    await ctx.db.insert("prices", {
      phoneId: redmi14C, amount: 92000, currency: "NGN",
      source: "Slot", sourceUrl: "https://slot.ng/xiaomi-redmi-14c", recordedAt: now,
    })

    const pocoX6Pro = await ctx.db.insert("phones", {
      brand: "Xiaomi", model: "POCO X6 Pro",
      slug: "xiaomi-poco-x6-pro-price-nigeria-specs-review",
      status: "current", announcedDate: "January 2024",
      releaseDateNigeria: "February 2024", imageUrl: "", createdAt: now, updatedAt: now,
    })
    await ctx.db.insert("specs", {
      phoneId: pocoX6Pro, display: "6.67 inches, AMOLED, 120Hz",
      processor: "MediaTek Dimensity 8300 Ultra", ram: "12GB", storage: "256GB",
      battery: "5000mAh", fastCharging: "67W",
      rearCamera: "64MP + 8MP + 2MP", frontCamera: "16MP",
      os: "Android 14, HyperOS", network: "5G",
      colorOptions: ["Racing Grey", "Flame Red", "Black"],
      weight: "190g", dimensions: "160.5 x 74.3 x 8.3mm",
      fingerprint: "Under-display", headphoneJack: false, updatedAt: now,
    })
    await ctx.db.insert("prices", {
      phoneId: pocoX6Pro, amount: 265000, currency: "NGN",
      source: "Cybervilla", sourceUrl: "https://cybervilla.io/poco-x6-pro", recordedAt: now,
    })
    await ctx.db.insert("reviews", {
      phoneId: pocoX6Pro,
      title: "POCO X6 Pro Review — The Performance King",
      content: "The Dimensity 8300 Ultra inside the POCO X6 Pro delivers near-flagship performance at a midrange price.",
      rating: 8.6,
      pros: ["Dimensity 8300 Ultra is incredibly fast", "67W charging", "120Hz AMOLED", "5G", "Great for gaming"],
      cons: ["No wireless charging", "No headphone jack", "Camera is good but not exceptional"],
      verdict: "Best performance phone under ₦400,000.",
      author: "Adeola Alabi", isFeatured: false, publishedAt: now, updatedAt: now, status: "published",
    })

    // ── 5. OPPO ───────────────────────────────────────────────────────────────
    const reno11 = await ctx.db.insert("phones", {
      brand: "OPPO", model: "Reno 11",
      slug: "oppo-reno-11-price-nigeria-specs-review",
      status: "current", announcedDate: "January 2024",
      releaseDateNigeria: "March 2024", imageUrl: "", createdAt: now, updatedAt: now,
    })
    await ctx.db.insert("specs", {
      phoneId: reno11, display: "6.7 inches, AMOLED, 120Hz",
      processor: "MediaTek Dimensity 7050", ram: "8GB", storage: "256GB",
      battery: "5000mAh", fastCharging: "67W",
      rearCamera: "50MP + 32MP (2x telephoto) + 8MP", frontCamera: "32MP",
      os: "Android 14, ColorOS 14", network: "5G",
      colorOptions: ["Rock Black", "Wave Green"],
      weight: "182g", dimensions: "162.4 x 74.3 x 7.9mm",
      fingerprint: "Under-display", headphoneJack: false, updatedAt: now,
    })
    await ctx.db.insert("prices", {
      phoneId: reno11, amount: 320000, currency: "NGN",
      source: "Jumia", sourceUrl: "https://jumia.ng/oppo-reno-11", recordedAt: now,
    })
    await ctx.db.insert("reviews", {
      phoneId: reno11,
      title: "OPPO Reno 11 Review — Portrait Photography Expert",
      content: "The Reno 11's 32MP telephoto lens makes it the best portrait camera phone at this price.",
      rating: 8.6,
      pros: ["2x telephoto for portraits", "67W SUPERVOOC charging", "32MP selfie camera", "Premium design"],
      cons: ["No wireless charging", "No headphone jack", "Expensive"],
      verdict: "Best portrait camera phone in Nigeria under ₦400,000.",
      author: "Adeola Alabi", isFeatured: false, publishedAt: now, updatedAt: now, status: "published",
    })

    const oppoA58 = await ctx.db.insert("phones", {
      brand: "OPPO", model: "A58",
      slug: "oppo-a58-price-nigeria-specs-review",
      status: "current", announcedDate: "October 2023",
      releaseDateNigeria: "November 2023", imageUrl: "", createdAt: now, updatedAt: now,
    })
    await ctx.db.insert("specs", {
      phoneId: oppoA58, display: "6.72 inches, IPS LCD, 90Hz",
      processor: "MediaTek Helio G85", ram: "8GB", storage: "128GB",
      battery: "5000mAh", fastCharging: "33W",
      rearCamera: "50MP + 2MP", frontCamera: "8MP",
      os: "Android 13, ColorOS 13", network: "4G LTE",
      colorOptions: ["Glowing Black", "Dazzling Green"],
      weight: "192g", dimensions: "165.7 x 76.0 x 8.0mm",
      fingerprint: "Side-mounted", headphoneJack: true, updatedAt: now,
    })
    await ctx.db.insert("prices", {
      phoneId: oppoA58, amount: 115000, currency: "NGN",
      source: "Slot", sourceUrl: "https://slot.ng/oppo-a58", recordedAt: now,
    })

    // ── 6. REALME ────────────────────────────────────────────────────────────
    const realmeC75 = await ctx.db.insert("phones", {
      brand: "Realme", model: "C75",
      slug: "realme-c75-price-nigeria-specs-review",
      status: "current", announcedDate: "November 2024",
      releaseDateNigeria: "December 2024", imageUrl: "", createdAt: now, updatedAt: now,
    })
    await ctx.db.insert("specs", {
      phoneId: realmeC75, display: "6.72 inches, IPS LCD, 90Hz",
      processor: "MediaTek Helio G85", ram: "8GB", storage: "128GB",
      battery: "6000mAh", fastCharging: "45W",
      rearCamera: "50MP + 2MP", frontCamera: "8MP",
      os: "Android 14, Realme UI 5", network: "4G LTE",
      colorOptions: ["Lightning Gold", "Stone Black"],
      weight: "198g", dimensions: "165.7 x 75.6 x 8.2mm",
      fingerprint: "Side-mounted", headphoneJack: true, updatedAt: now,
    })
    await ctx.db.insert("prices", {
      phoneId: realmeC75, amount: 135000, currency: "NGN",
      source: "Cybervilla", sourceUrl: "https://cybervilla.io/realme-c75", recordedAt: now,
    })
    await ctx.db.insert("reviews", {
      phoneId: realmeC75,
      title: "Realme C75 Review — 6000mAh Battery Beast",
      content: "The Realme C75's massive 6000mAh battery makes it the longest-lasting phone in its class.",
      rating: 8.0,
      pros: ["6000mAh battery — incredible endurance", "45W charging", "90Hz display", "Affordable"],
      cons: ["IPS LCD (not AMOLED)", "No 5G", "No ultrawide camera"],
      verdict: "Best battery life phone under ₦150,000 in Nigeria.",
      author: "Adeola Alabi", isFeatured: false, publishedAt: now, updatedAt: now, status: "published",
    })

    const realmeNote60 = await ctx.db.insert("phones", {
      brand: "Realme", model: "Note 60",
      slug: "realme-note-60-price-nigeria-specs-review",
      status: "current", announcedDate: "August 2024",
      releaseDateNigeria: "September 2024", imageUrl: "", createdAt: now, updatedAt: now,
    })
    await ctx.db.insert("specs", {
      phoneId: realmeNote60, display: "6.74 inches, IPS LCD, 90Hz",
      processor: "UNISOC T612", ram: "4GB", storage: "64GB",
      battery: "5000mAh", fastCharging: "15W",
      rearCamera: "50MP", frontCamera: "8MP",
      os: "Android 14, Realme UI 5", network: "4G LTE",
      colorOptions: ["Champion Gold", "Noble Black"],
      weight: "187g", dimensions: "167.2 x 75.7 x 8.0mm",
      fingerprint: "Side-mounted", headphoneJack: true, updatedAt: now,
    })
    await ctx.db.insert("prices", {
      phoneId: realmeNote60, amount: 72000, currency: "NGN",
      source: "Slot", sourceUrl: "https://slot.ng/realme-note-60", recordedAt: now,
    })

    // ── 7. APPLE iPHONE ──────────────────────────────────────────────────────
    const iphoneSE = await ctx.db.insert("phones", {
      brand: "Apple", model: "iPhone SE (2025)",
      slug: "apple-iphone-se-2025-price-nigeria-specs-review",
      status: "current", announcedDate: "February 2025",
      releaseDateNigeria: "March 2025", imageUrl: "", createdAt: now, updatedAt: now,
    })
    await ctx.db.insert("specs", {
      phoneId: iphoneSE, display: "4.7 inches, Retina IPS LCD, 60Hz",
      processor: "Apple A17 Pro", ram: "6GB", storage: "128GB",
      battery: "2018mAh", fastCharging: "20W",
      rearCamera: "48MP", frontCamera: "7MP",
      os: "iOS 17", network: "5G",
      colorOptions: ["Midnight", "Starlight", "Red"],
      weight: "144g", dimensions: "138.4 x 67.3 x 7.3mm",
      fingerprint: "Touch ID", headphoneJack: false, updatedAt: now,
    })
    await ctx.db.insert("prices", {
      phoneId: iphoneSE, amount: 380000, currency: "NGN",
      source: "Jumia", sourceUrl: "https://jumia.ng/apple-iphone-se-2025", recordedAt: now,
    })

    const iphone16 = await ctx.db.insert("phones", {
      brand: "Apple", model: "iPhone 16",
      slug: "apple-iphone-16-price-nigeria-specs-review",
      status: "current", announcedDate: "September 2025",
      releaseDateNigeria: "November 2025", imageUrl: "", createdAt: now, updatedAt: now,
    })
    await ctx.db.insert("specs", {
      phoneId: iphone16, display: "6.1 inches, Super Retina XDR OLED, 60Hz",
      processor: "Apple A18", ram: "8GB", storage: "128GB",
      battery: "3561mAh", fastCharging: "25W",
      rearCamera: "48MP + 12MP ultrawide", frontCamera: "12MP",
      os: "iOS 18", network: "5G",
      colorOptions: ["Black", "White", "Pink", "Teal", "Ultramarine"],
      weight: "170g", dimensions: "147.6 x 71.6 x 7.8mm",
      fingerprint: "Face ID", headphoneJack: false, updatedAt: now,
    })
    await ctx.db.insert("prices", {
      phoneId: iphone16, amount: 850000, currency: "NGN",
      source: "Jumia", sourceUrl: "https://jumia.ng/apple-iphone-16", recordedAt: now,
    })
    await ctx.db.insert("reviews", {
      phoneId: iphone16,
      title: "iPhone 16 Review — The AI iPhone Arrives",
      content: "Apple Intelligence marks the biggest shift for the iPhone in years. The iPhone 16 is the most capable base iPhone ever.",
      rating: 9.2,
      pros: ["Apple Intelligence is transformative", "A18 chip is incredibly fast", "Camera Control button", "Action Button", "7 years of iOS updates"],
      cons: ["60Hz display in 2025", "No ProMotion", "No titanium frame", "Very expensive in Nigeria"],
      verdict: "Best iPhone for most people in Nigeria.",
      author: "Adeola Alabi", isFeatured: true, publishedAt: now, updatedAt: now, status: "published",
    })

    // ── SEED ARTICLES ─────────────────────────────────────────────────────────
    await ctx.db.insert("articles", {
      title: "Best Phones Under ₦50,000 in Nigeria (2026)",
      slug: "best-phone-under-50000-naira-nigeria",
      excerpt: "From Tecno to Samsung — here are the best phones you can buy in Nigeria right now without spending more than ₦50,000.",
      content: `Looking for the best phone you can buy without spending more than ₦50,000 in Nigeria? We tested and ranked the top options available right now.\n\n## How We Picked These Phones\nEvery phone on this list has been thoroughly tested by our team in Lagos. We evaluate each device based on real-world performance, camera quality, battery life, build quality, and value for money.\n\n## What to Look for in a ₦50,000 Phone\nAt the ₦50,000 price point, you're entering the budget-to-midrange territory. Here's what matters most:\n- **Battery:** Look for 5000mAh minimum\n- **Display:** 90Hz or 120Hz refresh rate is becoming standard\n- **Storage:** 128GB minimum\n- **Camera:** 50MP is now standard even in budget phones\n\n## Top Picks\n### 1. Tecno Pop 9 — ₦48,000\nBest ultra-budget. Reliable everyday performer.\n### 2. Realme Note 60 — ₦72,000\nBest value. Large display and decent cameras.\n### 3. Infinix Smart 8 Pro — ₦55,000\nBest design. Premium look at a low price.`,
      type: "buying_guide",
      targetPhones: [],
      targetBrands: ["Tecno", "Infinix", "Realme", "Samsung"],
      targetPriceRange: "₦50,000",
      metaTitle: "Best Phones Under ₦50,000 in Nigeria (2026)",
      metaDescription: "Compare the best phones under ₦50,000 in Nigeria. Top picks from Tecno, Infinix, Realme, Samsung. Full reviews, prices, and specs updated July 2026.",
      featuredImage: undefined,
      author: "Adeola Alabi",
      isFeatured: true,
      publishedAt: now,
      updatedAt: now,
      status: "published",
    })

    await ctx.db.insert("articles", {
      title: "Best 5G Phones in Nigeria Under ₦300,000 (2026)",
      slug: "best-5g-phones-nigeria-2026",
      excerpt: "5G is rolling out in Nigeria. Here are the best 5G phones you can buy right now without breaking the bank.",
      content: `5G is now available in parts of Lagos, Abuja, and Port Harcourt. If you want a phone that's ready for the future, here are the best options.\n\n## Why 5G Matters in Nigeria\nMTN and Airtel have launched 5G in major cities. While coverage is still limited, having a 5G phone means you're ready when the network expands.\n\n## Top 5G Picks Under ₦300,000\n### 1. Samsung Galaxy A16 5G — ₦248,000\nBest overall. Samsung quality with 4 years of updates.\n### 2. Infinix GT 20 Pro — ₦285,000\nBest for gaming. 144Hz display and Dimensity 8200.\n### 3. Xiaomi POCO X6 Pro — ₦265,000\nBest performance. Dimensity 8300 handles anything.`,
      type: "buying_guide",
      targetPhones: [],
      targetBrands: ["Samsung", "Infinix", "Xiaomi", "OPPO"],
      targetPriceRange: "₦300,000",
      metaTitle: "Best 5G Phones in Nigeria Under ₦300,000 (2026)",
      metaDescription: "Best 5G phones in Nigeria under ₦300,000. Samsung, Infinix, Xiaomi. Compare prices and specs.",
      featuredImage: undefined,
      author: "Adeola Alabi",
      isFeatured: false,
      publishedAt: now,
      updatedAt: now,
      status: "published",
    })

    await ctx.db.insert("articles", {
      title: "Tecno Spark 30 vs Infinix Hot 40i — Which Should You Buy?",
      slug: "tecno-spark-30-vs-infinix-hot-40i-nigeria",
      excerpt: "Two of Nigeria's most popular budget phones face off. We put the Tecno Spark 30 and Infinix Hot 40i head-to-head.",
      content: `The Tecno Spark 30 and Infinix Hot 40i are the two most talked-about budget phones in Nigeria right now. Both are priced under ₦130,000 and both have 50MP cameras. So which should you buy?\n\n## Design & Display\nThe Spark 30 has a 120Hz AMOLED display while the Hot 40i makes do with 90Hz IPS LCD. The Spark 30 wins here.\n\n## Performance\nBoth phones run 8GB RAM, but the Spark 30's Helio G91 Ultra edges out the Hot 40i's UNISOC T606 in benchmarks.\n\n## Camera\nBoth have 50MP main cameras that perform similarly in good lighting. Low light goes to the Spark 30.\n\n## Verdict\nThe Tecno Spark 30 is the better phone, but the Infinix Hot 40i is ₦43,000 cheaper. Choose based on your budget.`,
      type: "comparison",
      targetPhones: [],
      targetBrands: ["Tecno", "Infinix"],
      targetPriceRange: undefined,
      metaTitle: "Tecno Spark 30 vs Infinix Hot 40i — Which Should You Buy?",
      metaDescription: "Tecno Spark 30 vs Infinix Hot 40i comparison. Which is the better phone in Nigeria? Full specs, price, and camera comparison.",
      featuredImage: undefined,
      author: "Adeola Alabi",
      isFeatured: true,
      publishedAt: now,
      updatedAt: now,
      status: "published",
    })

    return { success: true, message: "Database seeded successfully" }
  },
})
