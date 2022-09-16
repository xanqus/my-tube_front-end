import React, { useState } from 'react';
import Layout from '../../layouts/Layout';
import { useParams, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_URL } from '../../utils';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentlySelectedVideoState, userState } from '../../recoil';
import { useEffect } from 'react';

const VideoEditor = () => {
  const params = useParams();
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isPublic, setIsPublic] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `${BACKEND_URL}/api/v1/video/${params.id}`,
        method: 'GET',
      });
      setVideo(data.data);
      setTitle(data.data.title);
      setDescription(data.data.description);
      setIsPublic(data.data.isPublic);
    };
    getData();
  }, []);

  return (
    <Layout>
      <div className='flex pointer-events-auto'>
        <div className='flex w-60 flex-shrink-0 border border-r-0 border-t-0 z-0'>
          side menu
        </div>
        <div className='flex flex-col w-281 z-0 border-x border-b'>
          <div className='flex items-center h-18'>
            <div className='text-2xl font-bold ml-6'>동영상 세부정보</div>
            <div className='ml-auto'>
              <div
                className='btn btn-sm bg-blue-500 text-white border-none hover:bg-blue-500 rounded-none mr-4'
                onClick={async () => {
                  await axios({
                    url: `${BACKEND_URL}/api/v1/video/${params.id}`,
                    method: 'PATCH',
                    data: {
                      title,
                      description,
                      isPublic,
                    },
                  });
                }}
              >
                저장
              </div>
              <div className='btn btn-sm bg-red-500 text-white border-none hover:bg-red-500 rounded-none mr-6'>
                삭제
              </div>
            </div>
          </div>
          <div className='flex mt-4'>
            <div className='flex flex-col w-180'>
              <div className='border border-gray-300 focus-within:border-blue-500 rounded m-5'>
                <div className='text-sm pl-2 pt-2'>제목(필수항목)</div>
                <input
                  type='text'
                  className='w-full border-none p-4 pt-3 focus:ring-0'
                  value={title || ''}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div className='h-56 border border-gray-300 focus-within:border-blue-500 rounded m-5'>
                <div className='text-sm pl-2 pt-2'>설명</div>
                <textarea
                  type='text'
                  className='w-full border-none p-4 pt-3 focus:ring-0 resize-none'
                  placeholder='시청자에게 동영상에 대해 이야기하기'
                  value={description || ''}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className='flex flex-col items-center flex-grow'>
              <div className='flex flex-col m-6'>
                <div className='w-full h-40'>
                  <video
                    className='w-full h-full rounded-t'
                    controls
                    poster={video?.thumbnailUrl}
                  >
                    <source src={video?.videoUrl} />
                  </video>
                </div>
                <div className='w-full h-32 rounded-b text-sm p-2 bg-gray-50'>
                  <div>동영상 링크</div>
                  <div className='text-blue-500'>
                    <Link
                      to={`http://localhost:3000/watch?id=${video?.videoId}`}
                    >{`http://localhost:3000/watch?id=${video?.videoId}`}</Link>
                  </div>
                  <div className='mt-3'>파일 이름</div>
                  <div>{video?.filename}</div>
                </div>
              </div>
              <div className='form-control w-full max-w-xs focus:ring-0'>
                <label className='label'>
                  <span className='label-text'>공개 상태</span>
                </label>
                <select
                  className='select select-bordered focus:ring-0 focus:border-gray-300'
                  value={isPublic === true ? 'public' : 'private'}
                  onChange={(e) => {
                    if (e.target.value === 'public') {
                      setIsPublic(true);
                    } else if (e.target.value === 'private') {
                      setIsPublic(false);
                    }
                  }}
                >
                  <option value='public'>공개</option>
                  <option value='private'>비공개</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VideoEditor;
