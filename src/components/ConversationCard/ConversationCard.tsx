import { Reply, MoreHorizontal, Smile } from "lucide-react";
import { type Conversation, getReactionIcon } from "../../data/pullRequestData";

export function ConversationCard({
  conversation,
}: {
  conversation: Conversation;
}) {
  return (
    <div
      className={`border border-primary-light/20 rounded-lg overflow-hidden ${
        conversation.isReply ? "ml-6 md:ml-10" : ""
      }`}
    >
      {/* Header */}
      <div className="bg-surface-light px-3 md:px-4 py-2 md:py-3 border-b border-primary-light/20 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3 min-w-0">
          <img
            src={conversation.author.avatar}
            alt={conversation.author.name}
            className="w-6 h-6 md:w-8 md:h-8 rounded-full shrink-0"
          />
          <div className="flex flex-wrap items-center gap-1 md:gap-2 min-w-0">
            <span className="font-medium text-xs md:text-sm text-text-dark truncate">
              {conversation.author.name}
            </span>
            <span className="text-xxs md:text-xs text-primary-medium hidden sm:inline">
              @{conversation.author.username}
            </span>
            {conversation.isReply && (
              <span className="text-xxs md:text-xs text-primary-medium flex items-center gap-1">
                <Reply size={12} />
                <span className="hidden sm:inline">replied to</span>
                <span className="text-primary-light">
                  @{conversation.replyTo}
                </span>
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xxs md:text-xs text-primary-medium">
            {conversation.timestamp}
          </span>
          <button className="p-1 hover:bg-primary-light/10 rounded transition-colors">
            <MoreHorizontal size={14} className="text-primary-medium" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 md:p-4">
        <p className="text-xs md:text-sm text-text-dark leading-relaxed">
          {conversation.content}
        </p>

        {/* Reactions */}
        {conversation.reactions && conversation.reactions.length > 0 && (
          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-primary-light/10">
            {conversation.reactions.map((reaction, idx) => (
              <button
                key={idx}
                className="flex items-center gap-1 px-2 py-1 bg-surface-light hover:bg-primary-light/10 rounded-full text-xxs md:text-xs text-primary-medium transition-colors"
              >
                {getReactionIcon(reaction.emoji)}
                <span>{reaction.count}</span>
              </button>
            ))}
            <button className="p-1 hover:bg-surface-light rounded transition-colors">
              <Smile size={14} className="text-primary-medium" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
