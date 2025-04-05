'use client';
import PostCard from '@/components/dashboard/postCard';
import axiosInstance from '@/utils/api/axiosInstance';
import React, { useEffect, useState } from 'react';

const DashboardPage: React.FC = () => {
    const [feed, setFeed] = useState<any[]>([]);
    const [page, setPage] = useState(0);
    const ref = React.useRef<HTMLDivElement>(null);
    const limit = 10;

    const fetchFeed = async (page: number) => {
        try {
            const response = await axiosInstance.post(`/users/feed`, {
                page: page,
                limit: limit,}).then((res) => {
                return res.data
            });
            const data = response.data;
            console.log('Feed data:', data);
            setFeed((prevFeed) => [...prevFeed, ...data]);
        } catch (error) {
            console.error('Error fetching feed:', error);
        }
    };

    useEffect(() => {
        fetchFeed(page);
    }, [page]);

    const handleScroll = () => {
        console.log(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight)
        if (ref.current.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        console.log(ref.current);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
            <div ref={ref} className='flex flex-col gap-4 min-h-screen'>
                {feed.map((item, index) => (
                    <div key={index}>
                        <PostCard
                            likes={item.interactions.like}
                            shares={item.interactions.share}
                            location='Lucknow, India'
                            postImage={item.media_url}
                            profileImage=''
                            username={item.username}
                            caption={item.caption}
                            comments={item.interactions.comment}
                            timestamp={item.created_at}

                            />
                    </div>
                ))}
            </div>
        
    );
};

export default DashboardPage;