import { getUserAvatar } from "@/utils/avatar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserAvatarProps {
  user: {
    id: string
    name: string
    email: string
    role?: string
    avatarUrl?: string
  }
  size?: "sm" | "md" | "lg" | "xl"
  showStatus?: boolean
  status?: "online" | "offline" | "away" | "busy"
}

export function UserAvatar({ user, size = "md", showStatus = false, status = "offline" }: UserAvatarProps) {
  // Size mapping
  const sizeClass = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-16 w-16",
    xl: "h-24 w-24",
  }

  // Status color mapping
  const statusColor = {
    online: "bg-green-500",
    offline: "bg-gray-400",
    away: "bg-yellow-500",
    busy: "bg-red-500",
  }

  // Get initials from name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  return (
    <div className="relative">
      <Avatar className={`${sizeClass[size]} border-2 border-white dark:border-slate-800 shadow-sm`}>
        <AvatarImage
          src={user.avatarUrl || getUserAvatar(user.name, "avataaars", size === "xl" ? 128 : 64)}
          alt={user.name}
        />
        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
          {getInitials(user.name)}
        </AvatarFallback>
      </Avatar>
      {showStatus && (
        <span
          className={`absolute bottom-0 right-0 h-3 w-3 rounded-full ${
            statusColor[status]
          } ring-2 ring-white dark:ring-slate-800`}
        />
      )}
    </div>
  )
}
