PGDMP                         {            boleria #   14.8 (Ubuntu 14.8-0ubuntu0.22.04.1) #   14.8 (Ubuntu 14.8-0ubuntu0.22.04.1)     )           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            *           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            +           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ,           1262    16574    boleria    DATABASE     \   CREATE DATABASE boleria WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'pt_BR.UTF-8';
    DROP DATABASE boleria;
                postgres    false            �            1259    16605    cakes    TABLE     �   CREATE TABLE public.cakes (
    id integer NOT NULL,
    name character varying(255),
    price numeric(10,2),
    image character varying(255),
    description text
);
    DROP TABLE public.cakes;
       public         heap    postgres    false            �            1259    16604    cakes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cakes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.cakes_id_seq;
       public          postgres    false    210            -           0    0    cakes_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.cakes_id_seq OWNED BY public.cakes.id;
          public          postgres    false    209            �            1259    16612    clients    TABLE     �   CREATE TABLE public.clients (
    id integer NOT NULL,
    name character varying(255),
    address character varying(255),
    phone character varying(20)
);
    DROP TABLE public.clients;
       public         heap    postgres    false            �            1259    16611    clients_id_seq    SEQUENCE     �   CREATE SEQUENCE public.clients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.clients_id_seq;
       public          postgres    false    212            .           0    0    clients_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.clients_id_seq OWNED BY public.clients.id;
          public          postgres    false    211            �            1259    16619    orders    TABLE     �   CREATE TABLE public.orders (
    id integer NOT NULL,
    clientid integer,
    cakeid integer,
    quantity integer,
    createdat timestamp without time zone,
    totalprice numeric(10,2)
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    16618    orders_id_seq    SEQUENCE     �   CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.orders_id_seq;
       public          postgres    false    214            /           0    0    orders_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;
          public          postgres    false    213            �           2604    16608    cakes id    DEFAULT     d   ALTER TABLE ONLY public.cakes ALTER COLUMN id SET DEFAULT nextval('public.cakes_id_seq'::regclass);
 7   ALTER TABLE public.cakes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210            �           2604    16615 
   clients id    DEFAULT     h   ALTER TABLE ONLY public.clients ALTER COLUMN id SET DEFAULT nextval('public.clients_id_seq'::regclass);
 9   ALTER TABLE public.clients ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    212    212            �           2604    16622 	   orders id    DEFAULT     f   ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);
 8   ALTER TABLE public.orders ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213    214            "          0    16605    cakes 
   TABLE DATA           D   COPY public.cakes (id, name, price, image, description) FROM stdin;
    public          postgres    false    210   �       $          0    16612    clients 
   TABLE DATA           ;   COPY public.clients (id, name, address, phone) FROM stdin;
    public          postgres    false    212          &          0    16619    orders 
   TABLE DATA           W   COPY public.orders (id, clientid, cakeid, quantity, createdat, totalprice) FROM stdin;
    public          postgres    false    214   (       0           0    0    cakes_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.cakes_id_seq', 1, false);
          public          postgres    false    209            1           0    0    clients_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.clients_id_seq', 1, false);
          public          postgres    false    211            2           0    0    orders_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.orders_id_seq', 1, false);
          public          postgres    false    213            "      x������ � �      $      x������ � �      &      x������ � �     