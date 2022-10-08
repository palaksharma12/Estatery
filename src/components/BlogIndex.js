import React, { useState,useEffect } from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "../components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "../components/Header.js";
import { SectionHeading } from "../components/misc/Headings";
import { PrimaryButton } from "../components/misc/Buttons";
import { ReactComponent as HeartIcon } from "../images/heart.svg";
import { ReactComponent as BedIcon } from "../images/bed.svg";
import { ReactComponent as BathIcon } from "../images/bath.svg";
import { ReactComponent as AreaIcon } from "../images/area.svg";


const HeadingRow = tw.div`flex sm:-mr-8 flex-wrap mt-0`;
const Heading = tw(SectionHeading)`text-gray-900 inline-block w-full mb-8 mt-0`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`; 
const PostContainer = styled.div`
  ${tw`mt-10 w-full  sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${props =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Address} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Icon = styled.a`
  ${tw`cursor-pointer inline-block text-primary-200 hover:text-red-900 transition duration-300 float-right`}
  svg {
    ${tw`w-8 h-8`}
  }
`;
const DetailsIcon = styled.a`
  ${tw`cursor-pointer inline-block mt-6 mr-2 text-primary-200 hover:text-red-900 transition duration-300 `}
  svg {
    ${tw`w-5 h-5 ml-4 `}
  }
`;
const Post = tw.div`cursor-pointer flex flex-col sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none h-full flex! flex-col rounded-lg border-primary-100 border-2`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg sm:rounded-tl-4xl`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none sm:rounded-br-5xl`;
const Cost = tw.div` inline-block text-primary-500 text-lg font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const Month = tw.div` inline-block text-gray-500 text-xs font-bold mr-2`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Address = tw.div`text-xs leading-loose font-bold text-gray-500`;

const FormContainer = tw.div`inline-block flex! flex-col rounded-lg mx-auto `;
const Form = tw.form`mx-auto max-w-xs w-full`;
const Input = tw.input`w-full px-8 py-4 my-4 inline-block rounded-lg font-medium bg-gray-100 border border-gray-700 placeholder-gray-500 text-sm focus:outline-none focus:border-primary-500 focus:bg-white focus:border-2 mt-5 first:mt-0`;

const PrimaryButtonBase = tw(PrimaryButton)` sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6 `;

const ButtonContainer = tw.div` inline-block flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-0`;

export const Blogs = (props) =>
{  
  const [query1, setQuery1] = useState("");
  
  const onChange1 = async function(e) {
    await setQuery1(e.target.value); 
  };
  
  const [query2, setQuery2] = useState("");
  
  const onChange2 = async function(e) {
    await setQuery2(e.target.value); 
  };

  const [query3, setQuery3] = useState("");
  
  const onChange3 = async function(e) {
    await setQuery3(e.target.value); 
  };

  const onSubmit1 = (e) => {
    e.preventDefault();
  };
  const onSubmit2 = (e) => {
    e.preventDefault();
  };
  const onSubmit3 = (e) => {
    e.preventDefault();
  };
  const searchByPlace = () => {
    return (
      <FormContainer>
        <Form onSubmit={onSubmit1}>
          <Input
            type="search"
            name="search"
            onChange={onChange1}
            value={query1}
            placeholder="Search by Place "
          />
          
        </Form>
      </FormContainer>      
    );
  };
  const searchByType = () => {
    return (
      <FormContainer>
        <Form onSubmit={onSubmit2}>
          <Input
            type="search"
            name="search"
            onChange={onChange2}
            value={query2}
            placeholder="Search by type (House/ Villa / Flat ) "
          />
          
        </Form>
      </FormContainer>      
    );
  };
  
  const searchByCost = () => {
    return (
      <FormContainer>
        <Form onSubmit={onSubmit3}>
          <Input
            type="search"
            name="search"
            onChange={onChange3}
            value={query3}
            placeholder="Search by cost"
          />
          
        </Form>
      </FormContainer>      
    );
  };
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>Search <span tw="text-primary-500">properties</span> to rent</Heading>
            </HeadingRow>

            <HeadingRow>
            {searchByPlace()}
            {searchByType()}
            {searchByCost()}
          </HeadingRow>
          
          <Posts>
            {props.data ? props.data.map((post, i) => {
              
              if ((query1=="" && query2=="" && query3=="")|| (query1!="" && query3!="" && query2!=""  && post.title.toLowerCase().includes(query1.toLowerCase()) && post.cost.toLowerCase().includes(query3.toLowerCase()) && post.type.toLowerCase().includes(query2.toLowerCase()))   ||
              (query1!="" && query2=="" && query3=="" && post.title.toLowerCase().includes(query1.toLowerCase())) || 
              (query2!="" && query1=="" && query3==""  && post.type.toLowerCase().includes(query2.toLowerCase()))||
              (query3!="" && query2=="" && query1==""  && post.cost.toLowerCase().includes(query3.toLowerCase()) )||
              (query3!="" && query2!="" && query1==""  && post.cost.toLowerCase().includes(query3.toLowerCase()) && post.type.toLowerCase().includes(query2.toLowerCase()) )||
              (query1!="" && query2!="" && query3==""  && post.title.toLowerCase().includes(query1.toLowerCase()) && post.type.toLowerCase().includes(query2.toLowerCase()) )||
              (query1!="" && query3!="" && query2==""  && post.title.toLowerCase().includes(query1.toLowerCase()) && post.cost.toLowerCase().includes(query3.toLowerCase()) )){
                return (
                  <PostContainer key={i} featured={post.featured}>
                  <Post className="group" as="a" href={post.url}>
                    <Image imageSrc={post.imageSrc} />
                    <Info>
                      <Cost>{post.cost}</Cost>
                      <Month>/Month</Month>
                      <Icon>
                        <HeartIcon />
                      </Icon> 
                      <Title>{post.title} ( {post.type})</Title>
                      <Address>{post.address}</Address>
                      <hr style={{borderColor: 'grey',height: '1px',}}/>
                      <DetailsIcon> 
                        <BedIcon />
                      </DetailsIcon> 
                      <Month>{post.beds} beds</Month>
                      <DetailsIcon>
                        <BathIcon />
                      </DetailsIcon> 
                      <Month>{post.bathrooms} bathrooms</Month> 
                      <DetailsIcon>
                        <AreaIcon />
                      </DetailsIcon> 
                      <Month>{post.area}</Month>
                    </Info>
                    <PrimaryButtonBase>Buy Now</PrimaryButtonBase>
                  </Post>
                </PostContainer>
                )
              }
              else{
                return <></>;
              }
            }):"loading"}
          </Posts>
          
        </ContentWithPaddingXl>
      </Container>
    </AnimationRevealPage>
  );
};

export default Blogs;