/**
 * Generates a consistent avatar URL for a user based on their name
 * @param name User's name
 * @param style Avatar style (avataaars, bottts, initials, etc.)
 * @param size Size of the avatar in pixels
 * @returns URL to the avatar image
 */
export function getUserAvatar(name: string, style = "avataaars", size = 128): string {
  // Create a seed from the name for consistent generation
  const seed = encodeURIComponent(name.trim().toLowerCase())

  // Return a DiceBear avatar URL
  return `https://api.dicebear.com/7.x/${style}/svg?seed=${seed}&size=${size}`
}

/**
 * Gets the appropriate status color for a user's status
 * @param status User's status (online, offline, away, busy)
 * @returns Tailwind color class
 */
export function getStatusColor(status: string): string {
  switch (status.toLowerCase()) {
    case "online":
      return "bg-green-500"
    case "away":
      return "bg-yellow-500"
    case "busy":
      return "bg-red-500"
    case "offline":
    default:
      return "bg-gray-400"
  }
}
