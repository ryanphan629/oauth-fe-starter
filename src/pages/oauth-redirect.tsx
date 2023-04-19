import { useSearchParams } from 'react-router-dom';

const OAuthRedirect = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
    <div>
      <span className="font-bold">OAuth Token: </span> {searchParams.get("token")}
    </div>
    </>
    
  )
}

export default OAuthRedirect