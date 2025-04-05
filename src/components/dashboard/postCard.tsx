interface PostCardProps {
    username: string;
    location: string;
    profileImage: string;
    postImage: string;
    caption: string;
    timestamp: string;
    likes: number;
    comments: number;
    shares: number;
  }
  
  const PostCard: React.FC<PostCardProps> = ({ 
    username, 
    location, 
    profileImage, 
    postImage, 
    caption, 
    timestamp, 
    likes,
    comments,
    shares,
  }) => {
    return (
      <div className="flex justify-center p-4">
        <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-700 max-w-lg w-full shadow-2xl text-white rounded-xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full overflow-hidden ring-2 ring-blue-500">
                <img className="h-full w-full object-cover" src={profileImage || 'https://imgs.search.brave.com/zI-0naMO6SLqY_zCmVtLhJLtmSZj1lhPoTv3IS-uCLc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZHB6b25lLmluL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8xL0Nvb2wt/RFAtZm9yLUdpcmxz/LTA2LmpwZw'} alt={`${username}'s profile`} />
              </div>
              <div className="ml-3">
                <span className="text-sm font-semibold block leading-tight">{username}</span>
                <span className="text-gray-400 text-xs block">{location}</span>
              </div>
            </div>
            <button className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
          
          {/* Image */}
          <div className="w-full relative">
            <img 
              className="w-full h-auto object-cover max-h-96" 
              src={postImage} 
              alt="Post content" 
            />
          </div>
          
          {/* Action Buttons */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex gap-4">
                <button className="group transition-transform hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current text-white group-hover:text-red-500 transition-colors" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
                <button className="group transition-transform hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current text-white group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24">
                    <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
                  </svg>
                </button>
                <button className="group transition-transform hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current text-white group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24">
                    <path d="M22 3L9.218 10.083 11.698 14.85 7.23 12.898 5.896 18 20.898 18 22 3Z" />
                  </svg>
                </button>
              </div>
              <button className="group transition-transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current text-white group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24">
                  <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                </svg>
              </button>
            </div>
            
            {/* Likes */}
            <div className="font-semibold text-sm mb-2">{likes} likes</div>
            
            {/* Caption */}
            <div className="text-sm mb-2">
              <span className="font-semibold mr-1">{username}</span>
              <span className="text-gray-200">{caption}</span>
            </div>
            
            {/* Comments Link */}
            {comments > 0 && (
              <button className="text-gray-400 text-sm hover:text-gray-300 transition-colors">
                View all {comments} comments
              </button>
            )}
            
            {/* Timestamp */}
            <div className="text-gray-500 text-xs mt-2">{timestamp}</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PostCard;