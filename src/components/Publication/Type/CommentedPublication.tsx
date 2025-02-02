import Slug from '@components/Shared/Slug';
import { LensterPublication } from '@generated/lenstertypes';
import { ChatAlt2Icon } from '@heroicons/react/outline';
import Link from 'next/link';
import React, { FC } from 'react';

interface Props {
  publication: LensterPublication;
}

const CommentedPublication: FC<Props> = ({ publication }) => {
  const sourceId = publication?.commentOn?.id;
  const sourceProfileHandle = publication?.commentOn?.profile?.handle;

  return (
    <div className="flex items-center pb-4 space-x-1 text-gray-500 text-[13px]">
      <ChatAlt2Icon className="w-4 h-4" />
      <div className="flex items-center space-x-1">
        <Link href={`/posts/${sourceId}`}>
          Commented on {publication?.commentOn?.__typename?.toLowerCase()} by
        </Link>
        <Link href={`/u/${sourceProfileHandle}`}>
          <Slug slug={sourceProfileHandle} prefix="@" />
        </Link>
      </div>
    </div>
  );
};

export default CommentedPublication;
