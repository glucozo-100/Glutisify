// Generate a random avatar URL using DiceBear API
export function getRandomAvatar(name: string, size = 128): string {
  // Create a consistent seed based on the name
  const seed = encodeURIComponent(name)

  // List of available avatar styles
  const styles = [
    "adventurer",
    "adventurer-neutral",
    "avataaars",
    "big-ears",
    "big-ears-neutral",
    "bottts",
    "croodles",
    "croodles-neutral",
    "fun-emoji",
    "lorelei",
    "lorelei-neutral",
    "micah",
    "miniavs",
    "notionists",
    "open-peeps",
    "personas",
    "pixel-art",
    "pixel-art-neutral",
  ]

  // Select a random style
  const randomStyle = styles[Math.floor(Math.random() * styles.length)]

  // Return the avatar URL
  return `https://api.dicebear.com/7.x/${randomStyle}/svg?seed=${seed}&size=${size}`
}

// Generate a consistent avatar URL for a specific user
export function getUserAvatar(name: string, style = "avataaars", size = 128): string {
  const seed = encodeURIComponent(name)
  return `https://api.dicebear.com/7.x/${style}/svg?seed=${seed}&size=${size}`
}
