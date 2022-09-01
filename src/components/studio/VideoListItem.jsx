import React from "react";

const VideoListItem = () => {
  return (
    <tr>
      <th className="border-y">
        <input
          type="checkbox"
          checked="checked"
          className="rounded-none checkbox checkbox-sm"
          onChange={() => {}}
        />
      </th>
      <td className="border-y">
        <div className="flex">
          <div className="w-36">
            <img
              src="https://blog.kakaocdn.net/dn/m07x9/btqSLGu0ccF/WuCwiJPrNKx9IB3xpER7C1/img.png"
              alt="thumnail"
            />
          </div>
          <div className="flex flex-col ml-6 hover:bg-red-500">
            <div> 22 08 30 22강 할 일 추가 백엔드에 추가</div>
            <div>설명추가</div>
          </div>
        </div>
      </td>
      <td className="border-y">공개</td>
      <td className="border-y">없음</td>
      <td className="border-y">
        <div className="flex flex-col">
          <div>2022. 8. 30.</div>
          <div>게시날짜</div>
        </div>
      </td>
      <td className="border-y">4</td>
      <td className="border-y">0</td>
      <td className="border-y">10</td>
    </tr>
  );
};

export default VideoListItem;
