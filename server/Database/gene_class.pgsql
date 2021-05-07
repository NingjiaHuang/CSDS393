DROP TABLE IF EXISTS blood_type, HCM, PDK1;

-- blood type
CREATE TABLE public.blood_type (
	b_id int NOT NULL GENERATED ALWAYS AS IDENTITY,
	blood_type_sire varchar(20) NOT NULL,
	blood_type_dam varchar(20) NOT NULL,
	blood_type_child TEXT NOT NULL,
    PRIMARY KEY (b_id)
); 

--blood type instances
-- Cats with b/b genotype will have serotype B. Matings of a B-type mother to an A- or AB-type father 
-- can cause neonatal isoerythrolysis (a potentially lethal disease) in the litter of kittens.

INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('N/N', 'N/b', 'Kittens may be born as N/N or N/b'); 
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('N/N', 'N/N', 'Kittens will be born as N/N'); 
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('N/N', 'N/c', 'Kittens may be born as N/N or N/c'); 
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('N/N', 'c/c', 'Kittens may be born as N/c'); 
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('N/N', 'c/b', 'Kittens may be born as N/c, or N/b'); 
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('N/N', 'b/b', 'Warning! This pair can cause neonatal isoerythrolysis (a potentially lethal disease) in the litter of kittens.'); 

INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('N/b', 'N/N', 'Kittens may be born as N/N or N/b'); -- A or AB
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('N/b', 'N/b', 'Kittens may be born as N/N, N/b'); -- A or AB
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('N/b', 'N/c', 'Kittens may be born as N/N, N/b, N/c, or c/b'); -- A or AB
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('N/b', 'c/c', 'Kittens may be born as N/b, N/c, or c/b'); -- A or AB
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('N/b', 'c/b', 'Kittens may be born as N/b, N/c, or c/b'); -- A or AB
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('N/b', 'b/b', 'Warning! This pair can cause neonatal isoerythrolysis (a potentially lethal disease) in the litter of kittens.'); -- A or AB

INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('N/c', 'N/N', 'Kittens may be born as N/N or N/c'); -- A or AB
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('N/c', 'N/b', 'Kittens may be born as N/N, N/b, N/c, or c/b'); -- A or AB
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('N/c', 'N/c', 'Kittens may be born as N/N, N/c, or c/b'); -- A or AB
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('N/c', 'c/c', 'Kittens may be born as N/c, or c/c'); -- A or AB
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('N/c', 'c/b', 'Kittens may be born as N/b, N/c, or c/b'); -- A or AB
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('N/c', 'b/b',  'Warning! This pair can cause neonatal isoerythrolysis (a potentially lethal disease) in the litter of kittens.'); -- A or AB

INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('c/c', 'N/N', 'Kittens may be born as N/c'); -- A or AB
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('c/c', 'N/b', 'Kittens may be born as N/c, or c/b'); -- A or AB
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('c/c', 'N/c', 'Kittens may be born as N/c, or c/c'); -- A or AB
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('c/c', 'c/c', 'Kittens will be born as c/c'); -- A or AB
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('c/c', 'c/b', 'Kittens may be born as c/c, or c/b'); -- A or AB
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('c/c', 'b/b', 'Warning! This pair can cause neonatal isoerythrolysis (a potentially lethal disease) in the litter of kittens.'); -- A or AB

INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('c/b', 'N/N', 'Kittens may be born as N/b or N/c'); -- A or AB
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('c/b', 'N/b', 'Kittens may be born as c/b, N/b, N/c, or b/b'); -- A or AB
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('c/b', 'N/c', 'Kittens may be born as N/c, N/B, c/c, or c/b'); -- A or AB
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('c/b', 'c/c', 'Kittens may be born as c/b, or c/c'); -- A or AB
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('c/b', 'c/b', 'Kittens may be born as c/b, b/b, or c/b'); -- A or AB
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('c/b', 'b/b', 'Warning! This pair can cause neonatal isoerythrolysis (a potentially lethal disease) in the litter of kittens.'); -- A or AB

INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('b/b', 'N/N', 'Kittens will be born as N/b'); -- A or AB
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('b/b', 'N/b', 'Kittens may be born as N/b, or b/b'); -- A or AB
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('b/b', 'N/c', 'Kittens may be born as N/b, N/c, or c/b'); -- A or AB
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('b/b', 'c/c', 'Kittens will be born as b/c'); -- A or AB
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('b/b', 'c/b', 'Kittens may be born as b/b, or c/b'); -- A or AB
INSERT INTO blood_type (blood_type_sire,blood_type_dam, blood_type_child) VALUES ('b/b', 'b/b', 'Kittens will be born as b/b'); -- A or AB



-- HCM type
CREATE TABLE public.HCM (
	hcm_id int NOT NULL GENERATED ALWAYS AS IDENTITY,
	HCM_sire_result varchar(30) NOT NULL,
	HCM_dam_result varchar(30) NOT NULL,
	HCM_child_result TEXT NOT NULL,
    PRIMARY KEY (hcm_id)
); 

-- HCM instances
INSERT INTO HCM (HCM_sire_result, HCM_dam_result, HCM_child_result) VALUES ('N/N', 'N/HCMrd', 'Kittens may be born as N/N or N/HCMrd');
INSERT INTO HCM (HCM_sire_result, HCM_dam_result, HCM_child_result) VALUES ('N/N', 'N/N', 'Kittens will be born as N/N');
INSERT INTO HCM (HCM_sire_result, HCM_dam_result, HCM_child_result) VALUES ('N/N', 'HCMrd/HCMrd', 'Kittens will be born as N/HCMrd');

INSERT INTO HCM (HCM_sire_result, HCM_dam_result, HCM_child_result) VALUES ('N/HCMrd', 'N/N', 'Kittens may be born as N/N or N/HCMrd');
INSERT INTO HCM (HCM_sire_result, HCM_dam_result, HCM_child_result) VALUES ('N/HCMrd', 'N/HCMrd', 'Warning! Kittens may be born with HCMrd/HCMrd which is a potentially fatal condition.');
INSERT INTO HCM (HCM_sire_result, HCM_dam_result, HCM_child_result) VALUES ('N/HCMrd', 'HCMrd/HCMrd', 'Warning! Kittens may be born with HCMrd/HCMrd which is a potentially fatal condition.');

INSERT INTO HCM (HCM_sire_result, HCM_dam_result, HCM_child_result) VALUES ('HCMrd/HCMrd', 'N/N', 'Kittens will be born as N/HCMrd');
INSERT INTO HCM (HCM_sire_result, HCM_dam_result, HCM_child_result) VALUES ('HCMrd/HCMrd', 'N/HCMrd', 'Warning! Kittens may be born with HCMrd/HCMrd which is a potentially fatal condition.');
INSERT INTO HCM (HCM_sire_result, HCM_dam_result, HCM_child_result) VALUES ('HCMrd/HCMrd', 'HCMrd/HCMrd', 'Warning! Kittens will be born with HCMrd/HCMrd which is a potentially fatal condition.');

-- PKD1 type
CREATE TABLE public.PKD1 (
	pdk1_id int NOT NULL GENERATED ALWAYS AS IDENTITY,
	pdk1_sire_result varchar(15) NOT NULL,
	pdk1_dam_result varchar(15) NOT NULL,
	pdk1_child_result TEXT NOT NULL,
    PRIMARY KEY (pdk1_id)
); 

-- PKD1 instances
INSERT INTO PKD1 (pdk1_sire_result, pdk1_dam_result, pdk1_child_result) VALUES ('N/N', 'N/N', 'Kittens will be born as N/N.'); 
INSERT INTO PKD1 (pdk1_sire_result, pdk1_dam_result, pdk1_child_result) VALUES ('N/N', 'N/P', 'Kittens may be born as N/N or N/P.'); 
INSERT INTO PKD1 (pdk1_sire_result, pdk1_dam_result, pdk1_child_result) VALUES ('N/N', 'P/P', 'Kittens may be born as N/N or N/P.'); 

INSERT INTO PKD1 (pdk1_sire_result, pdk1_dam_result, pdk1_child_result) VALUES ('N/P', 'N/N', 'Kittens may be born as N/N or N/P.'); 
INSERT INTO PKD1 (pdk1_sire_result, pdk1_dam_result, pdk1_child_result) VALUES ('N/P', 'N/P', 'Warning! Kittens may be born with P/P and are unlikely to be born or survive.'); 
INSERT INTO PKD1 (pdk1_sire_result, pdk1_dam_result, pdk1_child_result) VALUES ('N/P', 'P/P', 'Warning! Kittens may be born with P/P and are unlikely to be born or survive.'); 

INSERT INTO PKD1 (pdk1_sire_result, pdk1_dam_result, pdk1_child_result) VALUES ('P/P', 'N/N', 'Kittens will be born as N/P.'); 
INSERT INTO PKD1 (pdk1_sire_result, pdk1_dam_result, pdk1_child_result) VALUES ('P/P', 'N/P', 'Warning! Kittens may be born with P/P and are unlikely to be born or survive.'); 
INSERT INTO PKD1 (pdk1_sire_result, pdk1_dam_result, pdk1_child_result) VALUES ('P/P', 'P/P', 'Warning! Kittens will be born with P/P and are unlikely to be born or survive.'); 


-- get HCM  info
CREATE OR REPLACE FUNCTION public.func_get_HCM_info(hcm_id integer DEFAULT NULL::integer, HCM_result character varying DEFAULT NULL::character varying)
 
RETURNS TABLE(r_hcm_id integer, r_HCM_result character varying)
LANGUAGE plpgsql
AS $function$
   declare query_condition varchar; 
   begin
	query_condition := '';
	if (hcm_id > 0) then
	    query_condition := '(hcm_id = ' || 
            cast(hcm_id as varchar) || ') and ';
	end if;
		
	HCM_result := trim(HCM_result);
	if (HCM_result <> '') then
	    query_condition := query_condition || 
                               '(upper(trim(HCM_result)) LIKE ''%' || 
                               upper(HCM_result) || '%'') and ';
	end if;

	
	query_condition := trim(query_condition);
	if (length(query_condition) > 0) then
	    query_condition := 'where ' || 
                               substring(query_condition, 0, length(query_condition) - 3);
	end if;
	
	return query execute 'select * from HCM ' || query_condition;
   end;
$function$;

-- get PKD1 info
CREATE OR REPLACE FUNCTION public.func_get_PKD1_info(pdk1_id integer DEFAULT NULL::integer, pdk1_result character varying DEFAULT NULL::character varying)
 
RETURNS TABLE(r_pdk1_id integer, r_pdk1_result character varying)
LANGUAGE plpgsql
AS $function$
   declare query_condition varchar; 
   begin
	query_condition := '';
	if (pdk1_id > 0) then
	    query_condition := '(pdk1_id = ' || 
            cast(pdk1_id as varchar) || ') and ';
	end if;
		
	pdk1_result := trim(pdk1_result);
	if (pdk1_result <> '') then
	    query_condition := query_condition || 
                               '(upper(trim(pdk1_result)) LIKE ''%' || 
                               upper(pdk1_result) || '%'') and ';
	end if;

	
	query_condition := trim(query_condition);
	if (length(query_condition) > 0) then
	    query_condition := 'where ' || 
                               substring(query_condition, 0, length(query_condition) - 3);
	end if;
	
	return query execute 'select * from PKD1 ' || query_condition;
   end;
$function$;

-- get blood type info
CREATE OR REPLACE FUNCTION public.func_get_blood_info(b_id integer DEFAULT NULL::integer, blood_type character varying DEFAULT NULL::character varying)
 
RETURNS TABLE(r_b_id integer, r_blood_type character varying)
LANGUAGE plpgsql
AS $function$
   declare query_condition varchar; 
   begin
	query_condition := '';
	if (b_id > 0) then
	    query_condition := '(b_id = ' || 
            cast(b_id as varchar) || ') and ';
	end if;
		
	blood_type := trim(blood_type);
	if (blood_type <> '') then
	    query_condition := query_condition || 
                               '(upper(trim(blood_type)) LIKE ''%' || 
                               upper(blood_type) || '%'') and ';
	end if;

	
	query_condition := trim(query_condition);
	if (length(query_condition) > 0) then
	    query_condition := 'where ' || 
                               substring(query_condition, 0, length(query_condition) - 3);
	end if;
	
	return query execute 'select * from blood_type ' || query_condition;
   end;
$function$;

--select instances
select * from func_get_blood_info(1, 'N/N');
select * from func_get_HCM_info(1, 'N/N');
select * from func_get_PKD1_info(1, 'N/N');